from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Cart, Event, RegisteredEvents
from .serializers import CartSerializer, EventSerializer, RegisteredEventsSerializer
from rest_framework.permissions import IsAuthenticated

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    
    def list(self, request):
        """Get all events"""
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response({
            'status': 'success',
            'message': 'Events retrieved successfully',
            'data': serializer.data
        }, status=status.HTTP_200_OK)
    
    @action(detail=False, methods=['get'])
    def filter(self, request):
        """Filter events by category, type, or division"""
        category = request.query_params.get('category', None)
        type_ = request.query_params.get('type', None)
        division = request.query_params.get('division', None)
        
        queryset = self.queryset
        if category:
            queryset = queryset.filter(category__name=category)
        if type_:
            queryset = queryset.filter(type=type_)
        if division:
            queryset = queryset.filter(division=division)
        
        serializer = self.get_serializer(queryset, many=True)
        return Response({
            'status': 'success',
            'message': 'Filtered events retrieved successfully',
            'data': serializer.data
        })
    
class CartViewSet(viewsets.GenericViewSet):
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        # Return cart items for the current user only
        return Cart.objects.filter(MKID=self.request.user)
    
    def list(self, request):
        """Get user's cart items"""
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response({
            'status': 'success',
            'message': 'Cart items retrieved successfully',
            'data': serializer.data
        }, status=status.HTTP_200_OK)
    
    def create(self, request):
        """Add items to cart"""
        # Add current user's MKID to the data
        data = request.data.copy()
        data['MKID'] = request.user.id
        
        serializer = self.get_serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'status': 'success',
                'message': 'Items added to cart successfully',
                'data': serializer.data
            }, status=status.HTTP_201_CREATED)
        return Response({
            'status': 'error',
            'message': 'Failed to add items to cart',
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
    
class RegisteredEventsViewSet(viewsets.GenericViewSet):
    serializer_class = RegisteredEventsSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        # Return registered events for the current user only
        return RegisteredEvents.objects.filter(MKID=self.request.user)
    
    def list(self, request):
        """Get user's registered events"""
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        
        # Calculate total amount
        total_amount = sum(float(event.event.price) for event in queryset)
        
        return Response({
            'status': 'success',
            'message': 'Registered events retrieved successfully',
            'data': {
                'registered_events': serializer.data,
                'total_events': len(serializer.data),
                'total_amount': total_amount
            }
        }, status=status.HTTP_200_OK)
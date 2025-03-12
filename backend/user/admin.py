from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Events

# class UserAdmin(BaseUserAdmin):
#     list_display = ('email', 'name', 'register_no', 'is_staff', 'is_superuser')
#     search_fields = ('email', 'name', 'register_no')
#     ordering = ('email',)
#     fieldsets = (
#         (None, {'fields': ('email', 'password')}),
#         ('Personal Info', {'fields': ('name', 'register_no')}),
#         ('Permissions', {'fields': ('is_staff', 'is_superuser', 'groups', 'user_permissions')}),
#     )
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('email', 'name', 'register_no', 'password1', 'password2', 'is_staff', 'is_superuser'),
#         }),
#     )
#     filter_horizontal = ('groups', 'user_permissions')

# admin.site.register(User, UserAdmin)

class EventsAdmin(admin.ModelAdmin):
    list_display = ('title', 'sub_title', 'description')
    search_fields = ('title', 'sub_title')

admin.site.register(Events, EventsAdmin)

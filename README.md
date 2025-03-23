# Start Backend and Frontend

## Starting the Backend

1. Navigate to the backend folder:
   ```sh
   cd backend
   ```
2. Create a virtual environment (if not already created):
   ```sh
   python -m venv venv
   ```
3. Activate the virtual environment:
   - On macOS/Linux:
     ```sh
     source venv/bin/activate
     ```
   - On Windows:
     ```sh
     venv\Scripts\activate
     ```
4. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
5. Apply migrations:
   ```sh
   python manage.py migrate
   ```
6. Start the backend server:
   ```sh
   python manage.py runserver
   ```

### Admin Panel for Events
To add or update events, create a superuser:
```sh
python manage.py createsuperuser
```
Then visit the admin panel at:
[http://localhost:8000/admin/](http://localhost:8000/admin/), click on **Events**, and perform CRUD operations.

## Starting the Frontend

1. Navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm start
   ```

Now, the frontend will be accessible at [http://localhost:3000](http://localhost:3000).


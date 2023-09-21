from django.urls import path
from . import views

urlpatterns = [
    path('api/user', views.UserList.as_view(), name='user_list'), # api/contacts will be routed to the ContactList view for handling
    path('api/user/<int:pk>', views.UserDetail.as_view(), name='user_detail'), # api/contacts will be routed to the ContactDetail view for handling
    path('api/phone', views.PhoneList.as_view(), name='phone_list'), # api/contacts will be routed to the ContactList view for handling
    path('api/phone/<int:pk>', views.PhoneDetail.as_view(), name='phone_detail'), # api/contacts will be routed to the ContactDetail view for handling
]

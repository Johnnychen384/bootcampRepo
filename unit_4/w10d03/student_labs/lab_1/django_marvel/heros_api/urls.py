from django.urls import path
from . import views

urlpatterns = [
    path('api/heros', views.HerosList.as_view(), name='heros_list'), # api/contacts will be routed to the ContactList view for handling
    path('api/heros/<int:pk>', views.HerosDetail.as_view(), name='heros_detail'), # api/contacts will be routed to the ContactDetail view for handling
]

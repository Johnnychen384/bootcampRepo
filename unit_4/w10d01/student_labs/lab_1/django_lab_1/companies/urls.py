from django.urls import path
from . import views

urlpatterns = [
    path('api/company', views.CompaniesList.as_view(), name='companies_list'), # api/contacts will be routed to the ContactList view for handling
    path('api/company/<int:pk>', views.CompaniesDetail.as_view(), name='companies_detail'), # api/contacts will be routed to the ContactDetail view for handling
]

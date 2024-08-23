from django.urls import path
from . import views

urlpatterns = [
    path('components/', views.get_components, name='get_components'),
    path('component/<str:name>/', views.get_component, name='get_component'),
    path('core_concepts/', views.get_core_concepts, name='get_core_concepts'),
]
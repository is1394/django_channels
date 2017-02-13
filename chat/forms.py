from django import forms
from .models import Room

class RoomForm(forms.ModelForm):
    class Meta:
        model = Room
        fields = [
            'label'
        ]
        labels={
            'label': 'Chat Room'
        }
        widgets = {
            'label': forms.TextInput(attrs={
                'class': 'form-control',
                'id': 'label',
                'placeholder': 'Write here your new chat room'
            })
        }

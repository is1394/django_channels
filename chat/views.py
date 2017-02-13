from django.shortcuts import render, redirect
from .models import Room
from .forms import RoomForm
# Create your views here.

def new_room(request):
    rooms = Room.objects.all()
    if request.method == 'POST':
        form = RoomForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect(chat_room, label=form.data['label'])
    else:
        form = RoomForm()

    context = {
        'rooms': rooms,
        'form': form
    }

    return render(request, 'new_room.html', context )

def chat_room(request, label):
    room, created = Room.objects.get_or_create(label=label)

    messages = reversed(room.messages.order_by('-timestamp')[:50])

    context = {
        'room': room,
        'messages': messages
    }

    return render(request, 'room.html', context)

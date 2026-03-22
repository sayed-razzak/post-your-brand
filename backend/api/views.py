from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from .serializers import ContactSerializer

@api_view(["POST"])
def contact_view(request):
    serializer = ContactSerializer(data=request.data)

    if serializer.is_valid():
        data = serializer.save()

        try:
            send_mail(
                subject="New Client Inquiry",
                message=f"Name: {data.name}\nEmail: {data.email}\nMessage: {data.message}",
                from_email="postyourbrand2@gmail.com",
                recipient_list=["postyourbrand2@gmail.com"],
                fail_silently=False,
            )
        except Exception as e:
            print("Email sending failed:", e)

        return Response(
            {"message": "Message received successfully"},
            status=status.HTTP_201_CREATED
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
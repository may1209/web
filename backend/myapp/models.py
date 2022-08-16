from django.db import models

# Create your models here.
class Website(models.Model):
    name = models.CharField(max_length=255)
    number = models.IntegerField(primary_key=True)

    def __str__(self):
        return self.name
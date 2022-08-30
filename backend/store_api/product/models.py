from django.db import models

class Product(models.models):

    name = models.CharField(max_length=70, null=False)
    price = models.DecimalField(decimal_places=2)
    photo = models.UrlField()
    description = models.TextField(max_length=200)

    def __repr__(self):
        return f'<{self.name} @ {self.price}>'


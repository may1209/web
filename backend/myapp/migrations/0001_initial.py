# Generated by Django 4.0.6 on 2022-08-03 10:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Website',
            fields=[
                ('name', models.CharField(max_length=255)),
                ('number', models.IntegerField(primary_key=True, serialize=False)),
            ],
        ),
    ]

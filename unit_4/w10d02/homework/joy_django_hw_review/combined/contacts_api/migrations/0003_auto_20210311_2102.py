# Generated by Django 3.1.7 on 2021-03-11 21:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('locations_api', '0001_initial'),
        ('contacts_api', '0002_contact_home'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='home',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='inhabitants', to='locations_api.location'),
        ),
    ]

# Generated by Django 4.1.4 on 2022-12-21 17:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Heros',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32)),
                ('age', models.IntegerField()),
                ('powers', models.CharField(max_length=50)),
                ('location', models.CharField(max_length=32)),
            ],
        ),
    ]

# Generated by Django 4.0.3 on 2022-04-11 18:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('basketball', '0006_rename_court_id_comment_court'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='court',
        ),
        migrations.AddField(
            model_name='comment',
            name='court_id',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]

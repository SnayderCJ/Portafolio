from rest_framework import serializers
from .models import Project, Skill

class ProjectSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        
        model = Project
        fields = '__all__' # O especifica los campos: ['id', 'title', 'description', ...]

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'
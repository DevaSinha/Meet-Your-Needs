package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Project;
import com.example.demo.repositories.ProjectRepository;

@Service
public class ProjectService {
	@Autowired
	ProjectRepository repo;
	
	public List<Project> getAll()
	{
		return repo.findAll();
	}
	
	public Project add(Project project)
	{
		return repo.save(project);
	}
}

# Scalable-CI-CD-Pipeline-for-a-Microservices-Based-E-Commerce-Platform

![Azure devops argocd k8s drawio](https://github.com/user-attachments/assets/d1305f76-1e49-486f-8e7c-20d573fc1c96)


## Project Overview

### Ecommerce Microservices Application

This project implements an ecommerce platform using a microservices architecture. It includes two services: Product Service and User Service, both built with Node.js, containerized with Docker, and deployed to Kubernetes using Azure DevOps CI/CD pipelines. The application is designed to demonstrate scalability, modularity, and efficient deployment workflows in a cloud-native environment.

### Key Features
#### 1. Microservices Architecture:
1. Product Service: Provides APIs for managing product data.
2. User Service: Provides APIs for managing user data.

#### 2. Technologies Used:
1. Backend: Node.js with Express.js.
2. Containerization: Docker for packaging services.
3. Orchestration: Kubernetes for managing and scaling containers.
4. CI/CD: Azure DevOps pipelines for automated build, test, and deployment.

#### 3. Cloud-Native Deployment:
Services are deployed to an Azure Kubernetes Service (AKS) cluster.
Kubernetes manifests (Deployment, Service, Namespace) are stored in a dedicated kubernetes-manifests/ directory.
ArgoCD is used for GitOps-based continuous deployment.

#### 4. Source Control:
The source code and manifests are stored in Azure Repos.


### Technology Stack
1. Cloud Provider: Azure
2. Source Control: Azure Repos
3. CI/CD Tool: Azure DevOps Pipelines
4. Containerization: Docker
5. Container Orchestration: Azure Kubernetes Service (AKS)
6. Registry: Azure Container Registry (ACR)
7. GitOps Tool: ArgoCD
8. Programming Language: Node.js (for microservices)


### Pipeline Workflow
1. Code Check-in: Developers push code to Azure Repos.
2. Build Stage: Docker images are built for the microservices and pushed to ACR.
3. Deploy Stage: Kubernetes manifests are deployed to AKS.
4. GitOps Synchronization: ArgoCD syncs the application state with the Kubernetes cluster.



### For step by step guide on how the microservices application was deployed, check the full article here --> (https://medium.com/@gbeengah/scalable-ci-cd-pipeline-for-a-microservices-based-e-commerce-platform-7f0715e9b731)

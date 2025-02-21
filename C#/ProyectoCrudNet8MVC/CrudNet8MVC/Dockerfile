#Start with the base .net SDK image
FROM mcr.microsoft/dotnet/sdk:8.0 as build-env

#Set the working directory inside the container
WORKDIR /app

#Copy the project files and restore the dependencies
COPY *.csproj ./
Run dotnet restore

#Copy the remaining files and build the application
copy . ./
Run dotnet publisch -c  Release o- out

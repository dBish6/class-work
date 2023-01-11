# Full-Stack_SpringAPI_Sprint_Final
This is our very last sprint project from my Solfware Development Course at Keyin Collage, Semester 4 2022. Team members included David Bishop, Dominic Whelan, Blake Waddleton and Chris Doucette. This project is an e-commerce website hosting many medi-eval and historic weapons.

__Note:__ _If you look in the console you'll see errors if not running the server locally. This is because the front end, when fetching the routes from the back end, it tries both of the avialble URLs. If one was succesful, it will warn you in the console that it was able to find a working server, but the other will show a small error. So, don't worry about it!_

## Application Details
Our Challenge for this project was to produce a back end rest API with Spring Boot coupled with a React front end. The back end was written in the Java language using object orientated programming. 

The database used was MySQL and AWS RDS for deployment. The back end was containerized using Docker and deployed with AWS Elastic Beanstalk. The React portion was developed in javascript and was deployed using S3 Web Hosting.

__DockerHub Container Repo:__<br />
`https://hub.docker.com/repository/docker/dbish6/finalsprint_raven_api_repo`

__Deployed Stable Version of the Website:__<br />
<i>\*URL doesn't work anymore sense the school stopped paying for it after we graduated >:( and I'm not going to pay for it haha, sorry!\*<i>
`http://ravenblacksmith.xyz.s3-website-us-east-1.amazonaws.com/home`

## Testing
Testing of the back end utilized Mockito and J-Unit frameworks. There is testing of the controller mappings, Class methods and Service methods.

## Getting Started
  __Back-End:__<br />
To get started **locally** with the back end you need environment variables. First, create a MySQL database to store the data. Then, located at back-end/src/main/resources/application.properties - the first variables you'll have to change is the RDS_ENDPOINT, you can configure you're own RDS database if you wish, but most likly you're going have to just change this to localhost:8080. These variables will not be available to the public so you also have to change the DB_USERNAME and DB_PASSWORD and replace these with whatever the credentials you put in for you're MySQL database. You can now start up the server at back-end/src/main/java/com/keyin/finalSprint/**FinalSprintApplication.java**.

__MOCK_DATA.csv:__<br />
To import the mock data to your MySQL database right click the schema, "s4_finalsprint", and use the "Table Data Import Wizard" and select the sword table, which is our products.

__Front-End:__<br />
- Use **npm install** to get the right modules set in package.json.
- **npm start** to start the development environment and run it locally on localhost:3000.

## Sincerely
Thank you for any interest in our project. We worked very hard, this is only the beginning for us. I think, this is very impressive for new developers and I hope you can be inspired and impressed by our work too :)


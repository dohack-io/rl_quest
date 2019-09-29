# Reallife Questsystem

## Description
This project aims to help newcomers to explore a given city. It provides a list of quests,
which each person can complete in order to gain experience and level up his character.
The quests consist of user generated quests, which allow city newcomers to connect to
other people living in the city. Such an example could be the participation in a jogging
quest.

On the other hand, a list of fixed/static quests are provided, which are generated from the
given city data and are based on city hotspots. They allow users to explore the city in a
gaming like context.

## Built with
The backend is build using Nodejs, Express and Socket.io. Express is used to handle the requests,
while Socket.io provides a direct TCP connection to the client. This TCP connection allows the
server to push live updates to the client, without the need of polling.

The client side is based on React, which allows the creation of separate components
that can be easily combined to the whole user interface.
The map itself is build using Leaflet, which can easily display OpenStreetMap tiles
and allows the developer to place markers on the map or define polygons (e.g. cities).
Material-UI provides consistent user interface elements, like buttons or a sidebar.

## What benefit will your work bring in smart city context?
It allows newcomers to explore the city and communicate with existing city members
in a playful way. For people living in the city it provides an easy way to find
new contacts in your proximity.

## What were challenges you encountered and Lessons Learned?
The main challenge was the creation of the frontend. As no frontend team member
has ever worked with React, it provided a tough challenge to get the basic
map with Leaflet working in the context with React, because of Reacts nature
every component needs it's dom managed by React. Therefore we needed to use
a special Leaflet implementation, which provided the necessary React components.
But sadly this implementation had some bugs (even the provided example didn't work correctly),
which resulted in a huge time loss until we got it working.

## About your team
Jonas Aqua is 18 years old and starts to study computer science this semester. He works
in Frontend with React and React Native and Backend with node.js and express.js

Emir Gülec is 21 years old and studies business and information systems engineering.
Skills: Java, HTML, JS, CSS but no experience with our used framework react.

Can Ceylan is 22 years old and studies business and information systems engineering.
Skills: Copy paste, Java, HTML, JS, CSS.

Sven is 23 years old and studies computer science.
Skills include Java, C++, HTML, JS, CSS, but no experience with frameworks like Angular and React.js

## What's next for your project?
The next step in our project is the integration of frontend and Backend

Features that could be added soon:
-user generated quests

## How does it look?
![Login Page](screenshot/login.PNG)
![Map Page](screenshot/map.PNG)
![Profile Page](screenshot/profile.PNG)

## Anything to add?

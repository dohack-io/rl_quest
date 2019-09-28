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
//TODO: describe each team member with their background knowledge

## What's next for your project?
//TODO: is there anything you've planned to work on after this hackathon? you've got some ideas of features to add? 

## How does it look?
//TODO: got any screenshots? post them here!

## Anything to add?
//TODO: add additional information. Is there soemthing you couldn't mention before? Do you have some videos or demos of your project?

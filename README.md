# friend-Finder

This application is a silly compatability app based around a selection of 10 Dungeons and Dragons themed questions.

The application is comprised of several parts.  

# The server

On the server the data on the friends is stored as well as the various routes the user can take on the application.

The server houses the routes to display the home page, the survey page, and to send the list of data stored on the server.

In the survey route we handle the matching process and send the user data that most closely matches the submitted data.

# The web page

There are two pages for the site, the home page which simply allows the user to navigate to the survey and then the survey.

The survey page takes advantage of the users browser to capture and create a new object from the user's responses in order to send that to the server.

After a user submits their answers a modal pops up to display the information for their closest match.

# The survey

Users are asked to enter their name and a picture and the page will require these fields to be filled in.  

From there the survey defaults the answers to each question to 1 (strongly disagree) and the user can select their choice of answer for each.

When the user hits submit the server calculates their best match and returns that data for them to be displayed on the page.

Sometimes a user might not enter an image into the image prompt, in which case we substitue a random default picture for that set of data when we display it.

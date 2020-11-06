import aboveME from "../../images/aboveMe.png"
import empDir from "../../images/employeeDirectory.png"
import grossB from "../../images/grossBurger.png"
import cryptEnc from "../../images/crypticEncounters.png"
import noteT from "../../images/noteTaker.png"
import empTrack from "../../images/employeeTracker.png"


const projectsJSON =
[
  {
    "id": 1,
    "title": "Above Me",
    "image": aboveME,
    "deployedURL": "https://raleighc.github.io/above_me-astronomy_localized/",
    "description": "An overwhelming amount of information exists on-line regarding the universe outside of our planet. This app aims to deliver a daily, digestible amount of information to the user based on their location and what can be found above them. Based on the times of sunrise and sunset at the users location, the experience and information that is accessible to the user changes. Upon sunrise, the user will find information on a satellite and asteroid that are currently near or in orbit of the earth. After sunset, the user will be able to explore the sky above them by accessing an interactive map of the stars above and a photograph with corresponding information from NASA’s database below. Inspired by the “word of the day” concept, the goal of the ABOVE ME app is to provide updated information on a daily basis."
  },
  {
    "id": 2,
    "title": "Employee Directory",
    "image": empDir,
    "deployedURL": "https://raleighc.github.io/react-emp-dir_hw-u19/",
    "description": "This application gives the user the ability to search through a database of employees at their company to find contact information in an easy to navigate central location. The user can view all employees in a directory with the ability to search by name and sort in order alphabetically."
  },
  {
    "id": 3,
    "title": "Gross Burger",
    "image": grossB,
    "deployedURL": "https://gross-burger.herokuapp.com/",
    "description": "This application allows the user name the most disgusting burger they can come up with and then move it between a ready to be eaten and devoured list."
  },
  {
    "id": 4,
    "title": "Cryptic Encounters",
    "image": cryptEnc,
    "deployedURL": "https://cryptic-encounters.herokuapp.com/",
    "description": "This project is a walk-through of a haunted house in which the user can interact with the spirits inside in different ways to get different dialogue responses and therefore, a different version of the spirits' stories. The user finds themselves trapped in a haunted house, and is instructed by a greeter ghost to speak with each of the ghosts in the house before being allowed to leave. Each spirit has a story, and you have to help them tell their story and escape, or you'll become trapped too!"
  },
  {
    "id": 5,
    "title": "Note Taker",
    "image": noteT,
    "deployedURL": "https://note-taker-app-hw-u11.herokuapp.com/",
    "description": "This application uses an Express server deployed on Heroku. It allows the user to write and save notes to a database that can be retrieved, view or delete later."
  },
  {
    "id": 6,
    "title": "Employee Tracker",
    "image": empTrack,
    "deployedURL": "https://drive.google.com/file/d/1WUAeYLCsiBOYl5KiLCVpmlxNrS4B2RGD/view",
    "description": "This CLI application allows the user to build and sort through a database of employees and their relevant information."
  }
]
export default projectsJSON;
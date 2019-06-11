# smarthome-aggregator
Aggregator for my different smarthome solutions, backend and frontend

# Install
## Backend

## Frontend


# The system explained

## Backend 
The system consists of a backend that does the aggregation across the multiple smarthome systems. This is done by using different components that does the actual integration. The backend supports two different data types in return from the integration components: Data and functions.

### Data elements
This is just simple key value pairs, the name of the value and its actual value. Ie `{name: 'Indoor temp', value: '21.4'}`. The intent of this datatype is to heavily normalized dataoutput for consumption in generic react components or node-red.

### Function elements
This is also a simple key value pair, the name of the command and intended value/action. Ie `{command: 'ventilation_mode', value: 'auto'}`. The intent is to provide somewhat normalized commands to send back to the integration component in the backend, to execute specifically towards the smarthome system.

### The APIs
These elements are presented as a set of API operations from the backend, pr integration component.

Endpoints
* Data Operation: GET - /api/v1/{system}/data - fetches all data elements defined by the integration component
* Function Operation: GET /api/v1/{system}/functions - fetches all function elements defined by the integration
* Function Operation: POST /api/v1/{system}/functions/{function} - executes a function, payload has key value pairs sent as parameteres to the function
## Frontend


# Todo planning
* Dynamic loading of components. Define class format, load from a directory
* Frontend to get a list of components and show them all
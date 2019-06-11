# smarthome-aggregator
Aggregator for my different smarthome solutions, backend and frontend

# Install
## Backend

## Frontend


# The system explained

## Backend 
The system consists of a backend that does the aggregation across the multiple smarthome systems. This is done by using different components that does the actual integration. The backend supports two different data types in return from the integration components: Data and functions.

### Data elements
This is just simple key pairs, the name of the value and its actual value. Ie `{name: 'Indoor temp', value: '21.4'}`. The intent of this datatype is to heavily normalized dataoutput for consumption in generic react components or node-red.

### Function elements
This is also a simple key pair, the name of the command and intended value/action. Ie `{command: 'ventilation_mode', value: 'auto'}`. The intent is to provide somewhat normalized commands to send back to the integration component in the backend, to execute specifically towards the smarthome system.

## Frontend

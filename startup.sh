#!/bin/sh

PORT=3000
PROCESS_ID=$(lsof -t -i :$PORT)

if [ ! -z "$PROCESS_ID" ]; then
  echo "Killing process on port $PORT with id $PROCESS_ID"
  kill -9 $PROCESS_ID

  sleep 1

  PROCESS_ID=$(lsof -t -i :$PORT)

  if [ ! -z "$PROCESS_ID" ]; then
    echo "Failed to kill process on port $PORT"
    exit 1
  fi
fi

echo "Starting npm..."
react-scripts start

#!/bin/bash
# intializes everything

# node and websites backend
# npm run dev

# flask api backend
exec flask --app app run --debug --host=0.0.0.0


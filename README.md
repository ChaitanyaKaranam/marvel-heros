# marvel-heros

App for demonstrating Redux time travel

# Demo

https://chaitanyakaranam.github.io/marvel-heros/

# Introduction

This application aims to introduce the basics of Redux concepts - Time Travel Debugging

You need to guess the order in which movies were released in Marvel cinematic universe.

You will have six chances/ infinity stones to guess the correct order. Application will reset once you lose all your stones.

# Redux

There are three states in this application.

Head over to Log Monitor tab in reudx-dev-tools to toggle actions that you want to change.

### ShuffledMovies

This state keeps track of current shuffled movies. On selection of any shuffled movie, it will be shifted to Selected Movies

### SelectedMovies

This state keeps track of current selected movies. On selection of any selected movie, it will be shifted to Shuffled Movies

### Lifes

This state keeps track of current lifes.



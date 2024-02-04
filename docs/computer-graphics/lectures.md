---
sidebar_position: 2
description: "Notes taken from in-person lectures. Dates are in YYYY-MM-DD format"
---

# 2024-01-31

Oof wtf

Notes for the project:
- We're writing a parser?
https://redirect.cs.umbc.edu/~adamb/435/nff.html
- `from` `at` `up` are v3 vectors
- Use `doubles` for everything
- `from` and `at` are points
- `up` is a direction
- `angle` is the field of view (60 degrees)
- `hither` (ignorable for assignemtns)
- IOgnore the aspect ratio!!!!!!!
- We only care about the `rgb`
- COnvert polygons tht are not triangles, convert them into triangles

## How to actually do Ray Tracing

Look at each pixel on an image, fire a line from your eye thru the pixel, and see what it intersects in the world.

Things to figure out:
- Find origin
- Find point (pixel) im going thru on image
- Figure out if theres an intersection or not

### How to find the point of the origin

`from` in the assignment

### How to find the pixel we're going thru

For this we need to find the center of the pixel we want to go trhu
`at` points at the center of the image

`at` - `from` = `-w` which is the viewing direction

These are the 3 axis that define the camera coordinate system
`w` = `- (at - from).normalize();` = `-(at - from).normalized();`
`v` = direction orthogonal to `w` = `(w cross u).normalized();`
`u` = cross product of `up` and `w`.`normalized().negated();` = `(up cross w).normalized();`

`w` is the most important, it will disappear.

We want `v` close to `w` as possible
We want an orthonormal basis; makes life easier

We compute `u` first, which is orthogonal to `up` and `w`
Then compute `v` which is orthogonal to... `w` and `u`

Normalize makes sure everything is ortho-normal

`w` comes out of the plane and going towards the camera

Swapping the order of a cross product gives you a negative


>`-v` because we discriminate against left-handed ppl

#### The camera coordinate system
The `origin` = `from`


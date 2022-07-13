# HTML/CSS lectures' notes

Some notes I took when taking HTML and CSS classes. Most of them contain obvious things, but taking notes helps me remember and learn things better.



## Flexbox

### Flex Containers

#### flex direction

row, row-reverse, column, column-reverse

#### flex wrap

specifies whether the flexible items should wrap or not

#### flex flow

flex-direction + flex-wrap

#### justify-content

align items inside container

doesn't apply if items are occupying 100% of the container

flex-start, flex-end, center, space-between, space-around

#### align-items

alignment according to container's axis

center, stretch, flex-start, flex-end, baseline

#### align-content

requirements: line breaking inside container, container's height greater than the sum of lines of items

center, stretch, flex-start, flex-end, space-between, space-around

### Flex Items

#### flex-grow

define proportionality of items' growth, giving their content's size

doesn't work if added justify-content to the container

#### flex-basis

set item's initial size

auto, px, %, em, ... , 0

#### flex-shrink

set item's reduction capability

#### flex

flex-grow + flex-shrink + flex-basis

#### order

which order to display things

#### align-self

individual alignment of an item

auto, flex-start, flex-end, center, stretch, baseline
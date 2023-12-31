![](/ga_cog.png)

---
Title: Introduction to CSS Grid<br>
Type: Exercise <br>
    Course: SEIR-Eevee<br>
Competencies: CSS, Grid<br>
Prerequisites: HTML, CSS basics<br>
Duration: 45 min

---

# CSS GRID

![](https://imgur.com/IqIRrx1.png)

## What is CSS Grid?

CSS Grid Layout is a two-dimensional layout system (which means it includes both columns and rows). So far we've been using Flexbox which is very useful, but is only a one-dimensional system (it controls either columns OR rows). You can actually use Flexbox and Grid together.

Grid is very useful when you need to customize your layout beyond the capabilities of floats, positioning and inline-block, or Flexbox. It is the most roboust layout system in CSS. You utilize Grid by applying CSS rules to both the parent (Grid Container) and the children (Grid Items).

### Can I use Grid?

Grid is supported almost universally on modern browsers.

You can always check out [caniuse.com](http://caniuse.com/) and [shouldiprefix](http://shouldiprefix.com/) to ensure that you are able to use Grid with whichever browser you need it to display on.

## Basic Terminology

![](https://imgur.com/41BYy6R.png)

- **Grid container** - An element that defines a grid-formatting context for its contents. (Parent)

- **Grid item** - An element that participates in grid layout within a grid-formatting context. (Children)

- **Grid track** - A continuous run between two adjacent grid lines. A grid row or column.

- **Grid cell** - Any space bounded by four grid lines, with no grid lines running through it.

- **Grid area** - Any rectangular area bounded by four grid lines and made up of one or more grid cells.


## Today's Build
![](https://imgur.com/4Z16JXq.png)

### Getting Started

#### Starter-Code Directory
- cd into w09d02 `exercise` folder and cd into ```starter_code```
- atom .
- Inside there are two files `index.html` and `main.css`
- `main.css` is the only file you will edit this morning
- Open `index.html` in your browser

*(Fun fact: Firefox includes a Grid Inspector, you can open it there if you have it - or you can check-out my example)*

#### What we have to start with 
![](https://i.imgur.com/dziDSG5.png)

#### Let's start by adding in our grid
main.css
```
.container {
  display: grid;
}
```
We don't see any changes yet because we haven't defined our grid. 

## Creating Our Grid

#### Explicit vs Implicit Grids
- An **Explicit Grid** is when we manually define our grid using `grid-template-rows`, `grid-template-columns` and `grid-areas`.
- An **Implicit Grid** is formed when there are more grid items than cells in the grid or when a grid item is placed outside of the explicit grid, the grid container automatically generates grid tracks by adding grid lines to the grid.

### Let's define our rows and columns
**main.css**
```
.container {
  grid-auto-columns: 1fr;
  grid-template-rows: 200px 500px 200px;
}
```

![](https://i.imgur.com/DFsIpGK.png)

When creating our rows/columns we can use the normal measurements such as px or em, as well as `min-content`, `max-content` and `auto`. We also have the option of using fractional units.

When using fractional units you are specifying the fractional amount of space out of what is available you would like for a column/row to take up. For example purposes we have used pixels for the template-rows and fractional units for the grid-columns.

### Now let's specify where we want our grid items to show up within our grid.
- To do so we are going to state which column we would like our item to start at `grid-column-start`.
- You can also specify which column you would like it to end on `grid-column-end`.
- If you don't set an end point it will automatically take up one column.

Let's start with our header section.

```
.header {
  grid-column-start: 1;
  grid-column-end: 11;
}
```

In this case we don't need to explicitly define how many rows we would like for our  `.header` to span, because we only want it to span 1 which is the default.

#### We can move on to the sidebars now

```
.leftSidebar {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
}

.rightSidebar {
  grid-column-start: 9;
  grid-column-end: 11;
  grid-row-start: 2;
}

```

#### Let's now choose where we want our `.main` content displayed within our grid
```
.main {
  grid-column-start: 4;
  grid-column-end: 8;
}
```

#### Finally we will create a grid within a grid for our `.footer` section

 Let's start by placing the footer in our original grid. This time let's use `grid-area` to accomplish this. 
 
Grid-area can be used as shorthand for row start / col start / row end / col end.

 ```
 .footer {
  grid-area: 3 / 3 / 4 / span 8;
 }
```

You might notice we used two different methods of specification within our grid area.  

We used regular numbers to specify start and stop for the first 3 values, the fourth uses `span`. Which declares how many rows/columns you want your grid to take up. 

Now we can make the `.footer` section into it's own grid in order to place our footer items in the desired places.

```
.footer {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  align-items: center;
}
```

![](https://imgur.com/Hnv1ADV.png)

Notice something new?

That's the `repeat()` notation we are using for our `grid-template-columns`.

We are saying that we want 11 columns that each take up 1 fractional unit.

#### Placing our footer items

We have 4 items in our footer section, let's go ahead and specify where we would like these all to go within our footer grid.

```
#footer1 {
  grid-column-start: 3;
}

#footer2 {
  grid-column-start: 5;
}

#footer3 {
  grid-column-start: 7;
}

#footer4 {
  grid-column-start: 9;
}
```
![](https://i.imgur.com/EQOxmVn.png)

#### Centering our text elements within our grid items

So our text is looking pretty funky, let's go ahead and clean that up.

We are able to both `justify-items` (aligns items along the row axis) and `align-items` (aligns items along the column axis).

Additionally you can use `place-items` which allows you to specify both of the above in one line.

#### Let's use `place-items` to center our text

```
.container > div, h1, h2 {
  display: grid;
  place-items: center;
}
```

#### Lastly let's take a look at a few other features `grid-row-gap` and `grid-column-gap`

This will specify the size of the grid lines.

```
.container {
  grid-column-gap: 10px; 
  grid-row-gap: 15px; 
}
```

#### You can also use `grid-gap` for shorthand to declare both grid-row-gap and grid-colum-gap in one line.

```
.container {
  grid-gap: 15px 10px; 
}
```

![](https://imgur.com/IWP8yuV.png)

## Final Thoughts 

That is all we are going to go over today, though Grid has many more useful features that you can utilize. Take some time to review and learn more about Grid using the resources below. 


## References
[CSS-TRICKS A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

[Learn CSS Grid](https://learncssgrid.com/)

[Grid Garden (A game for learning grid)](https://cssgridgarden.com/)

[CSS Grid Changes EVERYTHING (YouTube)](https://www.youtube.com/watch?v=7kVeCqQCxlk)

["Grid Layout in CSS: Interface Layout for the Web" by Eric A. Meyer](http://file.allitebooks.com/20161222/Grid%20Layout%20in%20CSS.pdf)

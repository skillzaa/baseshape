================================================================
===================Differences / Definition=====================
================================================================
--primtives are just the wrapping up of canvas draw functions where as a shape is what is drawn on the canvas using lineTo and arcTo etc
--shapes are made up of lines (a star or a heart), even a rectangle or a triangle can be made up of lines.so i will have a primtive rectangle and a shape rectangle.

-- the primtives has 1 point around which it is drawn but in a shape there are more than 1 point, like in a star.
-- since shape has more points all the other points will be in-reference to one main x and y. which is the left top cornor of the bounding rectangle.

-- since there will be many circles and many rectangles inside this app thus i shlud name them as they should be and present to user some other names.. layer it.. for example for a user primtives and shapes are the same.

---EACH CLASS SHOULD BE WIRED / LINKED INTO THE APP AT ONE AND ONLY ONE PLACE..

---A shape can never have more than one shape--it is just one thing--do not abstract it much.dont even add a bounding rect.however a shape does not mean continuous line. it can have missing segments but not 2 shapes.


----All shapes and primtives  both always have following in common and support this interface 
    --------ATTRIBUTES---
    width,height, X,Y--- others
    --------BEHAVIOUR---
================================================================
===================Must behaviours by both======================
================================================================
    
    -------- MOVE  horizontal , verticle and diagonal
    --------Rotate  
    --------Scale

    --bounding rectangle is a seperate class that is used by all shapes and primtives.
    
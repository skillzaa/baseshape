
what is the difference between project, asset, shapes and complex-shapes in bilzaa2d

mian idea : there are shapes (primtives) those shapes are combined into assets  and then those assets are made into one project.

---a project is made up of assets---
-- a project is 3 levels deep where as asset is just 2 levels deep.
		 project => assets => shapes/primtives
---assets is made up of just core shapes. However i will keep some core assets as shapes eg star heart etc
--in an asset every shape inside has the defualt animations and attributes. BUT those are not exposed outside rather custom attributes and animations are exposed. THE ASSET IS RESPONSIBLE FOR mainting the state of its shapes
--   the example of an asset is a tea cup that has getFilled animation or filled attribute. it can have different logos optiton on it. or a mug on which we can write our own title.
-- a shape is just one item one draw command to metal. where as an asset has 2-3 or 4 and the project has all of its own assets and all the shapes inside the assets..
-- the GRID is an asset and not a shape since a shape is a line ?????? can this also be shape???--noo a line is a shape a grid is an asset.
---- a big sign what is shape and what is not is the abstraction. in a shaoe there is no abstraction every attrobute is directly used in the metal. if it is not used in the metal then it should not be here. on the other hand a good asset will have abstraction and will hide complexity. an asset will have attributes like car-lights-on and car-lights-on --an asset is a small piece which is collection of shapes hiding complexity so that it can be used / consumed inside a project. 
----a project and the library are totally different things --- we will instatioate the library and feed a project to it and a project is like a clip or a video.
--a round rectangle is not a shape since all my shapes are wrappers around canvas api and there is no direct round rectangle function. so actually round recntagle is an asset.
 items like star, round recntagle, grid etc are ALL assets since they have own attributes and animations etc that they do not have 
 -- so a shape is a wrapper around the canvas api.. the primtives. and the star, rounded rectangle are the comlex shapes and then we have assets which uses primtives and complex shapes both.
 -- to a common user the primtives and complex shapes are the same but for me they are different. they are different from assets as well as shapes. An asset is a tcup of tea and a complex shape is star, .
 ---a shape just has draw attributes.
 --a complex shape has abstraction like cornor-roundness , number of grid line.
 -- the difference between 
 		an asset and shapes (both primtives and complex shapes)
 		is that a shape is made for useing and begin part of other
 		items, there are no abstractions other than the drawing. But an asset
 		has "behaviour" like car-open eyes-closed.
 A SHAPE X Y IS IN RELATIONSHIN TO CANVAS --AN ASSET ITEMS X AND Y ARE RELATIVE TO EACH OTHER. this is true for primtive and complex shapes both. Where as  the portions of an asset will be in relation to one another and not the canvas x and y. for example if the x of a tea cup chage the x of its logo should also change and the x of the mat under it should also change. the moment we are in relative x and y we are not in shapes we are in assets. 
JUST LIKE A SHAPE IS A WRAPPER AROUND A REAL RENTANGLE SHAPE SIMILARLY ITS ANIMATIONS ARE ALSO ROTATE MOVEX ETC AND NOT ABSTRACTED LIKE GLOW ETC. THOSE IF APPLIED WILL CREATE NON DRAW ATTRIBUTES AND MAKE THIS AN ASSET. 
--- this is not a game engine it is for making 2d cartoons and animations and presentations.  
a shape is a state of a physical shape (eg rectangle etc ie basic shapes) an asset is a state of collection of few shapes andddddddddd a project is a collection of assets each with its own shapes collection.
my attempt should be that
			---1-- the users should just make projects and should not be required to come down to assets level. at assets level they deal with shapes.
			--2-- this can  happen only if there are thousands of shapes avaiable and the users just pick and manipulate. this app strong point should be the avalibility.
			-3-- i can later on make SYSTEMS which are like character studio system which are character assets.
-- i will just make avaiable assets and in the begining there will be no asset making system for the users. the main string point of this library is on making use of the avaiable assets and manipulating them. suppose there are 100 assets each with average of 3 shapes. each sahpe has 15 attributes ie 4500 possible states of the application. with a thousand assets this becomes 45000
finally : a shape is just a wrapper around the basic draw api of canvas a complex shape is just an asset which is using more than 1 primtive shape and then we have assets which can be a called a little more complex complex-shapes. and finally we have projects which is what the user will make
	shape/primtive: wrapper for canvas api.
	asset : mixinng more than 1 shape and sync them
	projects : what the user will make. 			

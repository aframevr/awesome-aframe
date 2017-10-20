# awesome-aframe [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

A collection of awesome resources for the [A-Frame](https://aframe.io) WebVR
framework.

This list is synced now and then. For some of the more recent stuff, check out
the recent [A Week of A-Frame](https://aframe.io/blog) roundups on the
[A-Frame blog](https://aframe.io/blog).

## Table of Contents

- [Official Resources](#official-resources)
- [Community](#community)
- [Learning](#learning)
- [Components](#components)
- [Integration](#integration)
- [Scenes](#scenes)
- [Tools](#tools)

### Official Resources

Straight from the horse's mouth.

- [Official Site](https://aframe.io/)
- [Documentation and Guides](https://aframe.io/docs/)
- [Blog](https://aframe.io/blog/)
- [Examples](https://aframe.io/examples/)
- [Inspector](https://github.com/aframevr/aframe-inspector)
- [Registry](https://github.com/aframevr/aframe-registry)
- [Presentation Kit](https://github.com/aframevr/aframe-presentation-kit)
- [School](https://github.com/aframevr/aframe-school)
- [Command Line Interface](https://github.com/aframevr/angle)
- [Twitter](https://twitter.com/aframevr)

Scenes built by the A-Frame team.

- [A-Painter](https://aframe.io/a-painter/)
- [A-Blast](https://aframe.io/a-blast/)

### Community

[Community](https://aframe.io/community/)

### Learning

Learn about A-Frame.

#### Articles

##### Introduction

- [aframe.io](https://aframe.io/docs/)
- [Wikipedia &mdash; A-Frame](<https://en.wikipedia.org/wiki/A-Frame_(VR)>)
- [Wikipedia &mdash; Entity-Component-System](https://en.wikipedia.org/wiki/Entity_component_system)

##### Tutorials

- [Minecraft in WebVR with HTML Using A-Frame](https://css-tricks.com/minecraft-webvr-html-using-frame/) - Tutorial on creating a [Minecraft](https://minecraft.net/)-like scene in WebVR
- [First Steps in VR](https://24ways.org/2016/first-steps-in-vr) - Building a maze game in VR
- [Getting Started With A-Frame](http://www.tomango.co.uk/thinks/getting-started-aframe) - Building the Olympic rings using A-Frame
- [Relative Positioning in A-Frame](https://medium.com/immersion-for-the-win/relative-positioning-in-a-frame-d839fc0e3249) - How to use `<a-entity>` as a wrapper to create local coordinate spaces
- [Building a Simple Web VR UI with A-Frame](https://blog.neondaylight.com/build-a-simple-web-vr-ui-with-a-frame-a17a2d5b484) - Building a `set-sky` component that changes the background when an entity is clicked
- [Hands-on With Virtual Reality Using A-Frame, React, and Redux](https://medium.com/immersion-for-the-win/hands-on-with-virtual-reality-using-a-frame-react-and-redux-bc66240834f7)
- [A-Frame: The Easiest Way to Bring VR to the Web Today](https://www.sitepoint.com/a-frame-the-easiest-way-to-bring-vr-to-the-web-today/)

##### Case Studies

- [Why iStaging Chose A-Frame](https://aframe.io/blog/istaging/) - Building a large-scale real estate tour application
- [Building Ghost Train Builder](https://aframe.io/blog/ghost-train-builder/) - Building a Halloween ghost train builder application
- [Building Cardboard Dungeon with A-Frame](https://hacks.mozilla.org/2016/03/building-cardboard-dungeon-with-a-frame) - A case study on building a simple dungeon game using A-Frame
- [Head Tracked Transformations](https://medium.com/humane-virtuality/head-tracked-transformations-e7102d3c9789) - How to look behind an object in VR if you can't walk around it
- [The Bow & Arrow is Virtual Reality's "Hello, World"](https://medium.com/@jamesbpollack/the-bow-arrow-is-virtual-realitys-hello-world-b0556faa3ef8) - Building a bow and arrow for tracked controllers

#### Recordings

Videos and podcasts.

##### Tutorials

- [A-Frame Tutorials &mdash; Sonar Systems](https://www.youtube.com/watch?v=dv6_C4UqTfs&list=PLRtjMdoYXLf4inSULAHyCMqpIUj4cmBTr) - A-Frame video tutorial series on YouTube
- [A-Frame Tutorials &mdash; Alexandra Etienne](https://www.youtube.com/watch?v=XFv55TajSAg&list=PLUtkqA7NXVH7ctoJYhsh4xqJn3iWMpP30) - A-Frame video tutorial series on YouTube
- [Using d3.js with A-Frame](https://www.youtube.com/watch?v=Tb2b5nFmmsM) - Introduction to data visualizations in A-Frame with d3.js
- [Building an A-Frame Vive App from Scratch](https://www.youtube.com/watch?v=UcEMhuha8DA) - In Neocities

##### Talks

- [A-Frame &mdash; Kevin Ngo](https://www.youtube.com/watch?list=PLo3w8EB99pqIj_XNvNEMAaBtL_jyxSLmz&v=FWqgP3-9mOw) - 5-minute A-Frame talk at the [W3C Workshop on Web & Virtual Reality](https://www.w3.org/2016/06/vr-workshop/) [[Slides]](https://github.com/ngokevin/w3c-webvr-presentation)
- [Getting Started with Virtual Reality on the Web &mdash; Ada Rose Edwards](https://www.youtube.com/watch?v=-GkvYD6dNI8) - Talk at [London Web Perf 2017](https://ldnwebperf.org/events/?mth=1&yr=2017) with a live multiuser demo
- [How to Build Pokemon Go in 100% JS &mdash; Jess Telford](https://www.youtube.com/embed/kGXpgAb3Sbk?start=3970&end=5735) - Talk at [JSConf AU 2016](http://2016.jsconfau.com/) [[Slides]](https://jesstelford.github.io/js-go-presentation/#/0/0)
- [A-Frame: VR for Developers &mdash; Diego Marcos & Kevin Ngo](https://www.youtube.com/watch?v=wRqoSdPZQBY) - Talk on A-Frame at the [SFHTML5 "WebVR Ecosystem and API Update" meetup](https://www.meetup.com/sfhtml5/events/230072340/) [[Slides]](https://github.com/ngokevin/aframe-sfhtml5-presentation)
- [Building Virtual Reality on the Web &mdash; Kevin Ngo](https://www.youtube.com/watch?v=Ucsshrblkok) - Talk on A-Frame at NingJS 2016 [[Slides]](http://ngokevin.github.io/ningjs-presentation/#/)
- [Enter the Matrix, Exploring Your Kubernetes Cluster in Virtual Reality](https://www.youtube.com/watch?v=RyKzTb0Q0O4) - Talk on building a room-scale [Kubernetes](https://kubernetes.io/) browser in the HTC Vive at [KubeCon 2016](http://events.linuxfoundation.org/events/kubecon)

##### Podcasts

- [WebVR &mdash; Josh Carpenter and Kevin Ngo](http://shoptalkshow.com/episodes/254-webvr-josh-carpenter-kevin-ngo/) - Podcast with Shop Talk Show
- [Enabling the Open Metaverse with WebVR, A-Frame, and Servo &mdash; Diego Marcos & Chris Van](http://voicesofvr.com/471-mozilla-on-enabling-the-open-metaverse-with-webvr-a-frame-and-servo/) - Podcast with Voices of VR

### Components

Community components. To create and share a component, see
[angle](https://github.com/aframevr/angle)'s `initcomponent` tool. For curated
components, see the [A-Frame Registry](https://aframe.io/aframe-registry/).

- [Along Path](https://github.com/protyze/aframe-alongpath-component) - Interpolating an entity's position along a path
- [Always Fullscreen](https://github.com/protyze/aframe-always-fullscreen-component) - Provide ways to enable Fullscreen on iOS (Scroll to Minimal-UI) and Android/Desktop (Fullscreen API)
- [Ammo Physics Component](https://github.com/jeromeetienne/threex.ammo) - Library integrating [three.js](https://threejs.org/) and [ammo.js](https://github.com/kripken/ammo.js) to enable physics in objects
- [Animation](https://ngokevin.github.io/aframe-animation-component) - New and improved animation system using components. [[Code]](https://github.com/ngokevin/aframe-animation-component)
- [Asset Lazy Load](https://github.com/youmustfight/aframe-asset-lazy-load) - Assign asset loading order and delays
- [Asset On-Demand](https://github.com/protyze/aframe-asset-on-demand-component) - Load Assets dynamically when needed (and properly clean them up if not)
- [Audio Visualizer](https://github.com/ngokevin/aframe-audio-visualizer-components) - Audio visualizations using WebAudio API
- [Broadcast](https://github.com/ngokevin/aframe-broadcast-component) - Multiuser with WebSockets
- [ChartBuilder](https://github.com/impronunciable/aframe-chartbuilder-component) - Use [ChartBuilder](http://quartz.github.io/Chartbuilder) charts
- [Checkpoint Controls](https://github.com/donmccurdy/aframe-extras/blob/master/src/controls/checkpoint-controls.js) - Eased linear locomotion between designated hotspots
- [Collider, Explode, Spawner](https://github.com/dmarcos/a-invaders/tree/master/js/components) - Collection of components for collision, geometry explosions, and entity spawning
- [Crawling Cursor](https://github.com/jujunjun110/aframe-crawling-cursor) - Cursor projected onto surfaces
- [Crease](https://github.com/andreasplesch/aframe-crease-component) - Creased shading
- [Chromakey Material](https://github.com/nikolaiwarner/aframe-chromakey-material) - Chromakey material for green screen effects
- [Cubemap](https://github.com/bryik/aframe-cubemap-component) - Create a skybox from a cubemap
- [Daydream Controller](https://github.com/ryanbetts/aframe-daydream-controller-component) - Daydream controls
- [Drag Look](https://github.com/mayognaise/aframe-drag-look-controls-component) - Look controls in the opposite direction with changing cursor style
- [Draw](https://github.com/maxkrieger/aframe-draw-component) - HTML5 `<canvas>` as a material texture, with support for extension components
- [Effects System](https://github.com/wizgrav/aframe-effects) - A VR-ready post-processing framework for A-Frame
- [Entity Generator](https://github.com/ngokevin/aframe-entity-generator-component) - Generate entities
- [Event Set](https://github.com/ngokevin/aframe-event-set-component) - Set properties in response to events, replacement for declarative events
- [Extras](https://github.com/donmccurdy/aframe-extras) - Don's collection of A-Frame components
- [Extrude and Lathe](https://github.com/JosePedroDias/aframe-extrude-and-lathe) - Extrude and lathe geometries
- [Faceset](https://github.com/andreasplesch/aframe-faceset-component) - Geometry from vertices and faces
- [Fence](https://github.com/atomicguy/aframe-fence-component) - Set boundaries on entity position
- [Firebase](https://github.com/ngokevin/aframe-firebase-component) - Multiuser with Firebase
- [Fit Texture](https://github.com/nylki/aframe-fit-texture-component) - Automatically scale entities relative to their texture, so you don't need to set width/height manually
- [Force-directed Graph](https://github.com/vasturiano/aframe-forcegraph-component) - Represent a graph data structure in a 3D force-directed iterative layout, using [d3-force-3d](https://github.com/vasturiano/d3-force-3d) for the physics simulation engine.
- [FPS Look](https://github.com/cemkod/aframe-fps-look-component) - Facilitates controlling entity rotation directly with captured mouse
- [Gamepad Controls](https://github.com/donmccurdy/aframe-gamepad-controls) - Gamepad controls using HTML5 Gamepad API
- [GIF](https://github.com/gtk2k/gtk2k.github.io/tree/master/animation_gif) - Display GIF as a texture by using a Canvas
- [Google Blocks](https://github.com/archilogic-com/aframe-gblock) - Display content from Google Blocks
- [Gradient Sky](https://github.com/zcanter/aframe-gradient-sky) - Use two colors to create a gradient shader for colorful skies
- [Grid Helper](https://github.com/dbradleyfl/aframe-gridhelper) - Create customizable grids
- [Heatmap3d](https://github.com/morandd/aframe-heatmap3d) - Yet another heatmap/heightmap component
- [Height Grid](https://github.com/andreasplesch/aframe-heightgrid-component) - Terrain
- [Hexmap](https://github.com/morandd/aframe-hexgraph-hexmap) - A hex grid/map for data viz (inspired by deck.gl's hexmap layer)
- [href](https://github.com/gasolin/aframe-href-component) - Link to other pages using cursor component
- [HTML Texture](https://github.com/scenevr/htmltexture-component) - Using HTML as a texture, powered by html2canvas
- [Interpolation](https://github.com/scenevr/interpolation-component) - Interpolate positional and rotational updates for entities, useful for fetching from server for multiplayer
- [k-frame](https://github.com/ngokevin/k-frame) - Kevin's collection of A-Frame components
- [Keyboard](https://github.com/richardanaya/aframe-keyboard) - Full VR keyboard for use with WebVR controllers
- [L-System](https://github.com/nylki/aframe-lsystem-component) - Render [Lindenmayer](https://en.wikipedia.org/wiki/L-system) systems
- [Layout](https://github.com/ngokevin/aframe-layout-component) - 3D layout of child entities
- [Leap Hands](https://github.com/openleap/aframe-leap-hands) - [Leap Motion](https://www.leapmotion.com/) controller support
- [Lens Flare](https://github.com/mokargas/aframe-lensflare-component) - Lens flare
- [Look-At and Billboard](https://github.com/blairmacintyre/aframe-look-at-billboard-component) - Component to tell an entity to face another entity, or to face the camera
- [Mario Star Texture](https://github.com/casonclagg/aframe-mario-star-component) - Texture that cycles colors like stars in Mario using canvas
- [Mesh Line](https://github.com/andreasplesch/aframe-meshline-component) - Draw thick lines
- [Minecraft Avatar Components](https://jeromeetienne.github.io/threex.minecraft/a-frame/build/aframe-minecraft.js) - Allows the creation, control, and custom skins on Minecraft-like characters
- [Motion Capture](https://github.com/dmarcos/aframe-motion-capture-components/) - Record and replay headset and controller pose and events
- [Mouse Cursor Component](https://github.com/mayognaise/aframe-mouse-cursor-component) - Add interaction to the hardware mouse, by raycasting from `XY` position on canvas
- [Multitouch-look-controls](https://github.com/morandd/aframe-multitouch-look-controls) - Touch-driven freelook camera; drop-in replacement for look-controls
- [No-click Look Controls](https://github.com/alexrkass/aframe-no-click-look-controls) - Intuitive desktop view controls without requiring mouse click + drag
- [Ocean](https://github.com/donmccurdy/aframe-extras/blob/master/src/primitives/a-ocean.js) - Flat-shaded ocean primitive and component, with animated waves
- [Orbit Controls](https://github.com/subsumo/aframe-orbit-controls) - Orbit camera around an entity
- [Orbit Controls Component](https://github.com/tizzle/aframe-orbit-controls-component) - Allow desktop users to rotate the camera around an object
- [Particle System](https://github.com/IdeaSpaceVR/aframe-particle-system-component) - Particle systems (e.g., rain, dust, snow, fire)
- [Passthrough](https://github.com/flysonic10/aframe-passthrough) - Show a video feed from the device's camera
- [Persist Component](https://github.com/Utopiah/aframe-persist-component) - Use localStorage to make data persist over experiences
- [Physics + Vive Controls](https://github.com/donmccurdy/aframe-extras/tree/master/src/misc) - `grab` and `sphere-collider` components for combining the HTC Vive's controllers with the [`aframe-physics-system`](https://github.com/donmccurdy/aframe-physics-system) component
- [Physics](https://github.com/donmccurdy/aframe-physics-system) - Rigid-body physics using [Cannon.js](http://www.cannonjs.org/)
- [Pipe](https://github.com/jellix79/aframe-pipe-component) - A pipe with inner and outer radii
- [Plot](https://github.com/mikebolt/aframe-plot-component) - Render 3D plots using mathematical functions or data.
- [PLY Loader](https://github.com/donmccurdy/aframe-extras/tree/master/src/loaders) - Model loader for `.PLY` models, wrapping [`THREE.PLYLoader`](https://threejs.org/examples/webgl_loader_ply.html)
- [Polygon](https://github.com/andreasplesch/aframe-polygon-primitive) - `n`-sided polygons
- [Proxy Controls](https://proxy-controls.donmccurdy.com/) - Connect input devices from your desktop to your mobile phone with [WebRTC data channels](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Using_data_channels)
- [Randomizer](https://github.com/ngokevin/aframe-randomizer-components) - Set random values
- [Scatterplot](https://github.com/zcanter/aframe-scatterplot) - Scatterplot data visualization
- [Selectable](https://github.com/scenevr/selectable-component) by [@scenevr](https://twitter.com/scenevr) - Click on an entity to select it (handy for editors)
- [Shake-to-Show](https://github.com/rdub80/aframe-shake2show-component) - Using shake.js to toggle UI
- [Slice9](https://github.com/fernandojsg/aframe-slice9-component) - 9-Slice for creating sharp panels and tooltips for UI
- [Sprite](https://github.com/tizzle/aframe-sprite-component) - Creates bitmap images that always face the camera
- [Star](https://github.com/andreasplesch/aframe-star-component) - 2D stars
- [Stereo](https://github.com/oscarmarinmiro/aframe-stereo-component) - Enable rendering different entities for each eye, using three.js layers so you can render 3D stereoscopic videos (full and half-dome)
- [Stereo Cube](https://github.com/wallabyway/aframe-stereocube) - Use stereoscopic cube-map textures (i.e., left and right eye textures)
- [SVG File](https://github.com/7dir/aframe-svgfile-component) - Load basic SVG files as 3d geometry
- [Teleport Controls](https://github.com/fernandojsg/aframe-teleport-controls) - Teleportation with tracked controllers
- [Template](https://github.com/ngokevin/kframe/tree/master/components/template) - Integration with Handlebars, Jade, mustache, Nunjucks JS template engines
- [Terrain Model](https://github.com/bryik/aframe-terrain-model-component) - Generating terrains using TerrainLoader
- [Text Wrap](https://github.com/maxkrieger/aframe-textwrap-component) - Wrapping text dynamically rendered onto the `draw` component
- [Text Geometry](https://github.com/ngokevin/kframe/tree/master/components/text-geometry) - Polygonal text
- [THREE Loader](https://github.com/donmccurdy/aframe-extras/tree/master/src/loaders) - Model loader for `.json` models, wrapping THREE.JSONLoader and THREE.ObjectLoader
- [Trigger Box](https://github.com/Utopiah/aframe-triggerbox-component) - A component that emits an event when it enters or leaves a predefined area
- [Tube](https://github.com/donmccurdy/aframe-extras/blob/master/src/primitives/a-tube.js) - Cylindrical primitive that shapes itself to a given path
- [UI Components](https://github.com/gmarty/aframe-ui-components) - A collection of components related to UI
- [UI Modal](https://github.com/IdeaSpaceVR/aframe-ui-modal-component) - Show dialog box or a menu in front of the camera
- [UI Widgets](https://github.com/caseyyee/aframe-ui-widgets) - Another set of UI components, including buttons, switchs, sliders, and knobs
- [Universal Controls](https://github.com/donmccurdy/aframe-extras/tree/master/src/controls) - Refactored A-Frame controls that supports gamepad, HMD, keyboard, mouse + pointerlock, touch-to-move, with [physics](https://github.com/donmccurdy/aframe-physics-system) compatibility
- [Video Controls](https://github.com/oscarmarinmiro/aframe-video-controls) - Video controls (play/pause/jump) for A-Frame video assets
- [Vive Cursor](https://github.com/bryik/aframe-vive-cursor-component) - A cursor for the HTC Vive's controllers
- [WebVR Controller](https://github.com/richardanaya/aframe-webvr-controller) - HTC Vive controllers
- [WebVR-UI](https://googlevr.github.io/webvr-ui/examples/aframe.html) - "Enter VR" Button by Google VR [[Code]](https://github.com/googlevr/webvr-ui/blob/master/examples/aframe.html)

### Materials

- [Draw](https://github.com/mayognaise/aframe-draw-shader) - Render from canvas
- [HTML](https://github.com/mayognaise/aframe-html-shader) - Render from HTML
- [Video](https://github.com/mayognaise/aframe-video-shader) - iOS-compatible video material
- [GIF](https://github.com/mayognaise/aframe-gif-shader) - Render animated GIFs

### Integration

Integration with existing tools, frameworks, and libraries.

- [aframe-react](https://github.com/ngokevin/aframe-react) - Thin and performant React layer on top of A-Frame
- [D3.js](http://blockbuilder.org/search#text=aframe) - A-Frame data visualizations with D3.js
- [Vue.js + TweenMax demo](http://codepen.io/cheapsteak/pen/dGXZjx?editors=101) - Example of A-Frame with Vue.js for reactive components
- [aframe-templating-examples](https://github.com/ngokevin/aframe-templating-examples) - A-Frame with templating engines such as Handlebars, mustache, Nunjucks
- [SpineFrame](https://github.com/JoshGalvin/SpineFrame) - Component for 2D sprite animation with [Spine](http://esotericsoftware.com/)
- [Meteor](https://github.com/vladbalan/meteor-aframe) - A-Frame with [Meteor](https://www.meteor.com/), a JavaScript app framework
- [Altspace](https://github.com/AltspaceVR/aframe-altspace-component) - Integration with AltspaceVR
- [Drupal](https://www.drupal.org/project/aframe) - Drupal module for integration with A-Frame
- [Mixin Style Sheets](https://github.com/ngokevin/aframe-mss) - CSS-like stylesheets for A-Frame for declaring mixins [[Code]](https://github.com/ngokevin/aframe-mss)
- [aframe-d3-3d-graph-example](http://cjroth.com/aframe-d3-3d-graph-example/) - An example of a 3D weighted graph using D3 and Aframe.
- [aframe-d3-3d-bars-example](http://cjroth.com/aframe-d3-3d-bars-example/) - An example of a 3D bar chart using D3 and Aframe.
- [aframe-phantomjs-continuous-streaming](https://github.com/cjroth/aframe-phantomjs-continuous-streaming) - Browse the web in VR by live streaming a web page into A-Frame using PhantomJS and ffmpeg
- [aframe-keyboard](https://github.com/cjroth/aframe-keyboard) - A virtual-reality keyboard and text editor in A-Frame
- [Virtual World Framework](https://github.com/NikolaySuslov/livecodingspace) - A-Frame with [Virtual World Framework](https://github.com/virtual-world-framework/vwf), a JavaScript app framework for building collaborative, immersive applications with live coding support
- [aframe-next-static](https://github.com/michaltakac/aframe-next-static) - This boilerplate leverages extremely simple deployment flow from Zeit's Now, now available for WebVR with A-Frame and React

### Scenes

- [a-invaders](http://swimminglessonsformodernlife.com/a-invaders) - Space invaders game. [[Code]](https://github.com/dmarcos/a-invaders)
- [DrawVR](http://drawvr.com/) - DrawVR's portal leading to many A-Frame experiences including stores, games, rides, theaters, and scenes
- [Cardboard Dungeon](https://chrismwaite.github.io/cardboard-dungeon) - A first-person dungeon crawler designed for mobile. [[Code]](https://github.com/chrismwaite/cardboard-dungeon)
- [Don McCurdy's Sandbox](https://sandbox.donmccurdy.com/vr/) - Don McCurdy's A-Frame scenes including [MagicaVoxel](https://ephtracy.github.io/) models, physics playgrounds, and controls [[Code]](https://github.com/donmccurdy/aframe-extras)
- [Kevin Ngo's Scenes](https://ngokevin.github.io/kframe/) - Kevin Ngo's A-Frame scenes including MagicaVoxel models, audio visualizations, and a Minecraft demo [[Code]](https://github.com/ngokevin/kframe)
- [Aztec Pong](http://meta-meta.github.io/aztec-pong) - Play Pong floating atop an Aztec monument. [[Code]](https://github.com/meta-meta/aztec-pong)
- [Hello, Pizza!](http://carpedmt.github.io) - If a pizza spins in a forest and no one is around to eat it, does it make a sound? [[Code]](https://github.com/carpedmt/carpedmt.github.io)
- [Alien Abduction](http://vedm.xyz/abductionvr) - Alien Abduction demo
- [Mars: An Interactive Journey](http://wapo.st/marsvr) - Explore Mars in virtual reality. Published by the Washington Post and created by a group at University of Texas at Austin. Read [their thoughts on A-Frame and WebVR](https://developer.washingtonpost.com/pb/blog/post/2016/03/11/vr-for-all)
- [360 Syria](http://360syria.com/) - View the devastation of barrel bombs in Aleppo, Syria; created in partnership with [AllJunior](http://junior.io) and [Amnesty International UK](https://www.amnesty.org.uk)
- [Tron World - Carpet Ride](http://www.alexoviedo999.com/vr-carpet-ride/tron-world/)
- [SkyIslands VR](https://www.skyislandsvr.com/) - Strange virtual landscapes
- [Island](https://sandbox.donmccurdy.com/vr/island) - Voxel-based island in the ocean
- [Tiny Hands for Trump](http://tinyhandsfortrump.net) - Donald Trump parody
- [Sketch VR](https://uniform-futures.github.io/sketch-vr) - Doodle on paper, take a picture, and view it in VR. [[Code]](https://github.com/uniform-futures/sketch-vr)
- [EVA](http://www.jmvisualcreativity.es/vr_eva) - Prototype mecha in lava
- [Space Shark Room](https://liooil.neocities.org/VR_webStuff/room+07/room07.html) - Hinduist shark cage in space
- [Metal Gear REX](http://www.jmvisualcreativity.es/vr_metal) - Return to Shadow Moses… SNAKE!
- [Vapor Wave](https://liooil.neocities.org/VR_webStuff/vaporWave.html) - Trippy purgatory room
- [Jump Island](http://www.jmvisualcreativity.es/vr_jump/) - Can you make it to the top?
- [Roof Escape](http://www.jmvisualcreativity.es/vr_roof) - Parkour!
- [TumbVR](http://tbaloo.com/tumbvr/theonlymagicleftisart) - VR gallery for Tumblr
- [VR Wiki Museum](http://vrwikimuseum.com/wiki/Stegoceras) - Full Wikipedia in VR
- [Where is Piers Morgan Disliked the Most?](http://almossawi.com/aframe-d3-visualization/demo) - Data visualization with [D3](https://d3js.org/)
- [Missed Connections](http://armthethinker.github.io/webVR-experiments/5--missed-connections.html) - Visualization of Craigslist "Missed Connections" section
- [Aeon](http://aeon.horoman.com/) - Aeon is a 3D environment with VR support, where the user runs an island that tells about the prequel to the main story of Aeon
- [SlideAmaze](http://slideamaze.com/) - Turns your slideshow presentation [into a 3D maze](http://fouryears.eu/2016/07/27/slide-a-maze/)
- [Outside Lands VR](https://ngokevin.github.io/aframe-magicavoxel-projects/outsidelands) - VR preview of the San Francisco Outside Lands music festival
- [Multiplayer Tic-tac-toe](http://jsbin.com/janevom/edit?html,output) - Prototype of networked Vives playing Tic-tac-toe. [[Video](https://www.youtube.com/watch?v=vGjIWwozOU4)
- [30 Days of WebVR](https://codepen.io/collection/AKkywv) - One order of A-Frame and WebVR per day, all on CodePen
- [Dominoes](https://bryik.github.io/aframe-dominoes) - Demonstration for the HTC Vive with physics using dominoes. [[Code]](https://github.com/bryik/aframe-dominoes/blob/master/index.html), [[Video]](https://www.youtube.com/watch?v=gU-P-56kAnI)
- [Ball Throw](https://bryik.github.io/aframe-ball-throw) - Throw balls at blocks using Vive controllers and [Don McCurdy's](https://twitter.com/donrmccurdy) [physics](https://github.com/donmccurdy/aframe-physics-system). [[Code]](https://github.com/bryik/aframe-ball-throw)
- [Lyrics VR](https://gurumukhi.github.io/vr-ram/demos/lyricsVR/index.html) - Watch lyrics fly past you in time with the music. [[Code]](https://github.com/gurumukhi/vr-ram/tree/gh-pages/demos/lyricsVR)
- [Rubik's Cube](https://tushararora.github.io/rubiks-cube/) - Spinning Rubik's Cube featuring a multicolored-cube component. [[Code]](https://github.com/tushararora/tushararora.github.io/tree/master/rubiks-cube)
- [Shopify - City Shoes](https://shopifyvr.myshopify.com/) - Shop in VR! Pick up some trainers and see if they match your swagger
- [Vrogger](https://carbonfive.github.io/vrogger) - Frogger in VR. Hop and get across the road!
- [Design Portfolio](http://eddiebarkman.com/VR-Design-Portfolio/) - About pages in 3D space with neat transitions
- [Stand at the Edge of Geologic Time](https://apps.npr.org/rockymountain-vr/) - A virtual-reality tour from [NPR](http://www.npr.org/) of Rocky Mountain National Park. [[Code]](https://github.com/nprapps/rockymountain)
- [Earth Rover](https://www.hackster.io/RONDAGDAG/control-your-earth-rover-in-virtual-reality-15a9fe) - Controlling a physical robot from outer space using the [Intel Edison](https://software.intel.com/iot/hardware/edison) and Leap Motion
- [Imagined Reality](https://bryik.github.io/aframe-metaverse-contest/examples/imagined-reality.html) - Stereoscopic cubemaps, taken from winners of [OTOY’s Render the Metaverse](https://home.otoy.com/vr-competition/) contest
- [Star Crossed](http://vrweb.io/p/starCrossed) - Piano and stars
- [Procedural Forest](https://nylki.github.io/aframe-lsystem-component/forrest/) - A procedural forest with procedural trees using the [L-System Component](https://github.com/nylki/aframe-lsystem-component)
- [iStaging LiveTour](http://vrviewer.istaging.co/#!/684173) - 360&deg; real estate tours with a neat mini-map
- [Choose Your Own VR](https://github.com/dannielle/tinier-house) - Which cup will you choose?
- [Cat Garden](http://dirosa.me/cat-garden/) - Float through a space of cats and balloons
- [Virtual Symphony](https://flexingdream.github.io/aframe_demo) - Experience music in a new way on this symphonic trip through Martin Garrix and Third Party - Lions in the Wild
- [Brexit in Berlin](https://popathon.github.io/Gexit/hq.html) - Listen to Europeans talk and react to Brexit
- [Virtual Symphony II](https://musicpua.firebaseapp.com/) - Fly through particles, eagles, and horses while listening to *Chainsmokers - Inside Out (Remix)*
- [VRVisitors](https://georational.github.io/VRVisitors/VRVisitors.html) - Multi-user gallery of photogrammetric museum artifacts
- [Head-Tracked Transformations](https://armthethinker.github.io/webVR-experiments/6--head-tracked-transformations.html) - VR UX prototype of transforming objects’ orientations with your head to enhance VR experiences that don’t have positional tracking. Read the instructions listed at [#6](https://armthethinker.github.io/webVR-experiments/). [[Code]](https://github.com/armthethinker/webVR-experiments)
- [Weather Room](https://weatherroom.herokuapp.com/) - What’s the forecast for WebVR? Sunny with no chance of rain. [[Code]](https://github.com/sebscholl/weatherroom)
- [CinemVR Design Prototype](http://valentin.design/vr) - Design prototype of a VR cinema
- [JM Visual Creativity](http://vr.jmvisualcreativity.es) - Web designer and motion-graphics artist Jose Manuel Serna’s portfolio
- [WebVR Forest](https://danstrong.com/webvr) - At A-Frame National Park
- [Breathing Scape](http://www.jon-ibe.be/aframe) - A tree-adorned hill that slowly breathes
- [A-Runner](https://joshgalvin.github.io/arunner) - Infinite runner game with cubes
- [Zenspot](https://s3-us-west-2.amazonaws.com/zenpath/pz/main.html) - Relaxing nature experiences with soothing music
- [Force Push](https://sandbox.donmccurdy.com/vr/force-push/) - Become a block bender
- [Low Nausea FPS Locomotion](http://farbs.org/lownauseavrfps) - Locomotion prototype for using 6DoF controllers (e.g., HTC Vive's) to grab and swing through scenes
- [WebVR Soccer Stadium Complex](https://s3.amazonaws.com/cassell-webvr/webvr-soccer-stadium-multiplex/index.html) - Watch several video feeds at once in a soccer stadium. [[Code]](https://github.com/cassell/webvr-soccer-stadium-multiplex)
- [Trident](https://codepen.io/bryik/pen/XKWgvK) - Code experiment with cursor events in d3.js
- [VR Inception School](https://output.jsbin.com/pisaje) - Learn a bit about WebVR in WebVR
- [GuriVR](https://gurivr.com/) - Create sharable VR scenes using natural language and zero code. [[Code]](https://github.com/opennewslabs/guri-vr)
- [VR Space Builder](http://vr.greenbushlabs.com/) - Simple VR builder for kids using a form to import models and images
- [WebVR API Simulation Extension](https://chrome.google.com/webstore/detail/webvr-api-emulation/gbdnpaebafagioggnhkacnaaahpiefil) - Run WebVR 1.0 content without a supported headset or even a compatible browser/platform. Great for development
- [WebVR Solar System](http://vrspace.jmvisualcreativity.es) - Solar System using A-Frame
- [Track](https://samsunginter.net/a-frame-demos/racer) - Zooming on the track with the ocean water reflecting the sunset sky. [[Code]](https://github.com/SamsungInternet/a-frame-demos/blob/gh-pages/racer/index.html)
- [AaMAZE Music Festival](http://vr.aamaze.dk/) - Fully responsive official VR website for the AaMAZE music festival in Denmark
- [Heart](https://s3.amazonaws.com/vr-asset-repo/heart_demo_slack.html) - An educating and interactive tour of the heart. But a life is at stake
- [Miradas 360](https://miradas360.github.io/miradas360-01) - 360&deg; experiences created by media-production teams. [[Code]](https://github.com/Miradas360/miradas360-01)
- [Interactive 360&deg; Videos](https://s3.amazonaws.com/hapyak_demos/interactive360video/edit.html) - Upload and edit 360&deg;-interactive videos by overlaying DOM elements
- [Unity Exporter to A-Frame](https://github.com/if1live/unity-scene-web-exporter) - Export Unity scenes to three.js or A-Frame with lightmapping
- [WordPress Template](https://www.construktiv.de/imagine/?p=557) - WordPress template that displays the four most recent posts in VR
- [Web Speech API Test](https://codepen.io/bryik/pen/mErOOR?editors=0010) - A demo of the Speech Recognition API to change object colors
- [Apollo 11 Scan](http://math.nist.gov/~SRessler/aframe/ebd/projects/apollo/) - View the inside of the Apollo 11 Command Module, thanks to the [National Air and Space Museum](https://airandspace.si.edu/)
- [Covo](https://s3-us-west-1.amazonaws.com/geopogo/covo/aframe_0_1_0/index.html) - Architectural visualization with baked global illumination
- [TrippyVR.Tech](http://trippyvr.tech) - A showcase of various trippy VR experiences
- [Asteroids](https://headshotvr.herokuapp.com/) - FPS of Asteroids made with A-Frame and React
- [ScreenVR](https://jonathanzwhite.github.io/screenvr) - Use your desktop in the Web in VR
- [Let It Snow](https://surebak.github.io) - Snowflake maker
- [City Builder](https://kfarr.github.io/aframe-city-builder) - Room-scale city builder. [[Code]](https://github.com/kfarr/aframe-city-builder)
- [Low-Poly Forest Scene](http://forestvr.onepopcorn.com/) - Scene with snow and low-poly forest
- [Tarski's Truth Machine](https://apps.tlt.stonybrook.edu/tarski/) - Tarski's Truth Machine for the HTC Vive
- [Tattoo Simulator](http://www.tattoosim.com/) - **NSFW (Nudity)** Place tattoos on a human model
- [Aincraft](https://ngokevin.github.io/kframe/scenes/aincraft/) - Room-scale Minecraft demo with tracked controllers
- [Band Explorer VR](https://bandexplorervr.com/) - Spotify browser
- [The Hall](https://cecropia.github.io/thehallaframe/) - Museum that works across all VR devices
- [CityViewR](https://runhar.github.io/CityViewR/) - Open data for smart cities
- [MathworldVR](https://vr.sld.gs/mathworldvr/) - Room-scale 3D graphing calculator
- [Dashboard VR](http://valcourgames.com/index.php/applications/dashboard-vr) - Displays real-time local information to the user such as weather, stocks, and news headlines
- [2017](http://2017.ronikdesign.com/) - Holiday snow globe in New York City
- [Temples of Cambodia](http://interactive.aljazeera.com/aje/2017/cambodia-temples/) - Tour of the most popular temples of Cambodia, from [Al Jazeera](http://www.aljazeera.com/)
- [React Imago3D](https://github.com/kenta88/react-imago3d) - Make WebVR easily creating your own scene with built-in 3d object and use your browser or vr headset to see what you built in real time.
- [Have fun with nature](https://polideaplayground.github.io/WebVRExperience/) - Play with different environmental effects using your desktop browser or mobile VR headsets, like Daydream, Gear VR or Cardboard. [[Code]](https://github.com/PolideaPlayground/WebVRExperience)

### Tools

Tools built with or for A-Frame.

- [WebVR Studio](http://webvrstudio.com/)
- [Fader Editor](https://getfader.com/)
- [IdeaSpace VR](https://www.ideaspacevr.org/)
- [Hologram](https://hologram.cool/)

Contributions and suggestions are very welcome. Check out the guidelines and [make a pull request](https://github.com/aframevr/awesome-aframe/edit/master/README.md).

## License

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0)

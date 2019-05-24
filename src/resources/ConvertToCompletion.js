const EventData = {
  "10000100": {
    "name": "Generate Article",
    "description": "Generate a pre-made prop effect from the prop library.",
    "parameters": [
      {
        "type": "value",
        "label": "Article ID",
        "description": "The ID of the prop article to be called."
      }
    ]
  },
  "10000200": {
    "name": "Generate Article",
    "description": "Generate a pre-made prop effect from the prop library.",
    "parameters": [
      {
        "type": "value",
        "label": "Article ID",
        "description": "The ID of the prop article to be called."
      },
      {
        "type": "unknown",
        "label": "Subaction Exclusive?",
        "description": "Whether or not you want the article to be automatically deleted when the subaction ends."
      }
    ]
  },
  "10010100": {
    "name": "Article Event 02",
    "description": "Makes the article preform an animation. For example, to make pit shoot his arrow, set it to 1.",
    "parameters": [
      {
        "type": "value",
        "label": "Parameter 0",
        "description": "ID of the article."
      }
    ]
  },
  "10010200": {
    "name": "Set Ex-Anchored Article Action",
    "description": "Does the same thing as Set Article Action and Set Article Action 2 but seems to work on articles that are only initially attached to the character. (Used on Lucario's Aura Sphere)",
    "parameters": []
  },
  "10020100": {
    "name": "ONLY Article Event",
    "description": "Article Animaion.",
    "parameters": []
  },
  "10030100": {
    "name": "Remove Article",
    "description": "Removes an article.",
    "parameters": [
      {
        "type": "value",
        "label": "Article",
        "description": "ID of the article to be removed."
      }
    ]
  },
  "10040100": {
    "name": "Set Article Action",
    "description": "Sets the specified article to execute the specified action immediately. Only works on anchored articles (Cape, FLUDD, not fireball, water).",
    "parameters": [
      {
        "type": "value",
        "label": "Model ID",
        "description": "Model.(Only Summons the ID of the article/model to call. ONLY SUMMONS A FITCHARACTER00.pac. For example, Pit's bow is article/model 0)"
      }
    ]
  },
  "10040200": {
    "name": "Set Article Action",
    "description": "Sets the specified article to execute the specified action immediately. Only works on anchored articles (Cape, FLUDD, not fireball, water).",
    "parameters": [
      {
        "type": "value",
        "label": "Article ID",
        "description": "The ID of the article you would like to edit."
      },
      {
        "type": "unknown",
        "label": "Action",
        "description": "The action you would like the article to execute."
      }
    ]
  },
  "10040300": {
    "name": "Set Anchored Article Action",
    "description": "Sets the specified article to execute the specified action immediately. Only works on anchored articles (Cape, FLUDD, not fireball, water).",
    "parameters": [
      {
        "type": "value",
        "label": "Article ID",
        "description": "The ID of the article you would like to edit."
      },
      {
        "type": "value",
        "label": "Action",
        "description": "The action you would like the article to execute."
      },
      {
        "type": "boolean",
        "label": "Subaction Exclusive?",
        "description": "Whether or not you want the article to be automatically deleted when the subaction ends."
      }
    ]
  },
  "10050200": {
    "name": "Article Visibility",
    "description": "Makes an article visible or invisible.",
    "parameters": [
      {
        "type": "value",
        "label": "Article",
        "description": "ID of the article to be affected."
      },
      {
        "type": "boolean",
        "label": "Visibility",
        "description": "Set Boolean: True = Visible, False = Invisible"
      }
    ]
  },
  "10070200": {
    "name": "Set Article Action",
    "description": "Does the same thing as Set Article Action but seems to work on articles that aren't attached to the character.",
    "parameters": [
      {
        "type": "value",
        "label": "Article ID",
        "description": "ID of the article to be affected."
      },
      {
        "type": "unknown",
        "label": "Action",
        "description": "The action you would like the article to execute."
      }
    ]
  },
  "10080200": {
    "name": "Set Remote Article Action",
    "description": "Does the same thing as Set Article Action but seems to work on articles that aren't attached to the character. (Used on Snake's downB)",
    "parameters": [
      {
        "type": "value",
        "label": "Article ID",
        "description": "ID of the article to be affected."
      },
      {
        "type": "unknown",
        "label": "Animation ID",
        "description": "The action you would like the article to execute."
      }
    ]
  },
  "10130100": {
    "name": "Link Character and Article?",
    "description": "Seems to be used whenever a detached article needs to change its action.",
    "parameters": [
      {
        "type": "value",
        "label": "Article ID",
        "description": "ID of the article to be affected."
      }
    ]
  },
  "11001000": {
    "name": "Graphic Effect (Detached)",
    "description": "Generate a graphical effect. Stays at the spot it was spawned.",
    "parameters": [
      {
        "type": "value",
        "label": "Graphic",
        "description": "The file from which to call from/The graphical effect to call, where XXXXYYYY is X=File# Y=Graphic ID."
      },
      {
        "type": "value",
        "label": "Bone",
        "description": "The bone to attach the graphical effect to."
      },
      {
        "type": "scalar",
        "label": "Z Offset",
        "description": "Transition from the attached bone along the Z axis."
      },
      {
        "type": "scalar",
        "label": "Y Offset",
        "description": "Transition from the attached bone along the Y axis."
      },
      {
        "type": "scalar",
        "label": "X Offset",
        "description": "Transition from the attached bone along the X axis."
      },
      {
        "type": "scalar",
        "label": "Z Rotation",
        "description": "Rotation along the Z axis."
      },
      {
        "type": "scalar",
        "label": "Y Rotation",
        "description": "Rotation along the Y axis."
      },
      {
        "type": "scalar",
        "label": "X Rotation",
        "description": "Rotation along the X axis."
      },
      {
        "type": "scalar",
        "label": "Size",
        "description": "The size of the graphic."
      },
      {
        "type": "scalar",
        "label": "Random Z Offset",
        "description": "A random value lesser than the specified value and added to the Z Offset."
      },
      {
        "type": "scalar",
        "label": "Random Y Offset",
        "description": "A random value lesser than the specified value and added to the Y Offset."
      },
      {
        "type": "scalar",
        "label": "Random X Offset",
        "description": "A random value lesser than the specified value and added to the X Offset."
      },
      {
        "type": "scalar",
        "label": "Random Z Rotation",
        "description": "A random value lesser than the specified value and added to the Z Rotation."
      },
      {
        "type": "scalar",
        "label": "Random Y Rotation",
        "description": "A random value lesser than the specified value and added to the Y Rotation."
      },
      {
        "type": "scalar",
        "label": "Random X Rotation",
        "description": "A random value lesser than the specified value and added to the X Rotation."
      },
      {
        "type": "boolean",
        "label": "Terminate With Animation",
        "description": "Sets whether or not this graphic effect terminates when the animation ends."
      }
    ]
  },
  "11031400": {
    "name": "Sword Glow",
    "description": "Creates glow of sword. Only usable when the proper effects are loaded by their respective characters. ",
    "parameters": [
      {
        "type": "value",
        "label": "Trace ID",
        "description": "Color/Type. (usually, only sword characters that have multiple sword glow textures can change the color of this)"
      },
      {
        "type": "value",
        "label": "Blur Length",
        "description": "The length of the glow's aftershadow."
      },
      {
        "type": "value",
        "label": "Starting Bone",
        "description": "Bone the 1st point of the sword trail follows."
      },
      {
        "type": "scalar",
        "label": "1st Glow X Offset",
        "description": "X offset of the 1st point of the sword trail."
      },
      {
        "type": "scalar",
        "label": "1st Glow Y Offset",
        "description": "Y offset of the 1st point of the sword trail."
      },
      {
        "type": "scalar",
        "label": "1st Glow Z Offset",
        "description": "Z offset of the 1st point of the sword trail."
      },
      {
        "type": "value",
        "label": "2nd Bone",
        "description": "Bone the 2nd point of the sword trail follows. (usually the same as the first)"
      },
      {
        "type": "scalar",
        "label": "2nd Glow X Offset",
        "description": "X offset of the 2nd point of the sword trail."
      },
      {
        "type": "scalar",
        "label": "2nd Glow Y Offset",
        "description": "Y offset of the 2nd point of the sword trail."
      },
      {
        "type": "scalar",
        "label": "2nd Glow Z Offset",
        "description": "Z offset of the 2nd point of the sword trail."
      },
      {
        "type": "boolean",
        "label": "Glow State",
        "description": "If set to true, glow/trail disappears at the end of the sub action."
      },
      {
        "type": "value",
        "label": "Graphic",
        "description": "The file from which to call from/The graphical effect to call, where XXXXYYYY is X=File# Y=Graphic ID."
      },
      {
        "type": "value",
        "label": "Glow Bone",
        "description": "Bone the sword glow follows."
      },
      {
        "type": "scalar",
        "label": "X Offset",
        "description": "X offset of sword glow."
      },
      {
        "type": "scalar",
        "label": "Y Offset",
        "description": "Y offset of sword glow."
      },
      {
        "type": "scalar",
        "label": "Z Offset",
        "description": "Z offset of sword glow."
      },
      {
        "type": "scalar",
        "label": "X Rotation",
        "description": "Rotation of the sword glow around the X axis."
      },
      {
        "type": "scalar",
        "label": "Y Rotation",
        "description": "Rotation of the sword glow around the Y axis."
      },
      {
        "type": "scalar",
        "label": "Z Rotation",
        "description": "Rotation of the sword glow around the Z axis."
      },
      {
        "type": "scalar",
        "label": "Glow Length",
        "description": "Length of the sword glow, i.e. halving this value will make it half the sword's length."
      }
    ]
  },
  "11041700": {
    "name": "Sword Glow",
    "description": "Creates glow of hammer.",
    "parameters": [
      {
        "type": "value",
        "label": "Trace ID",
        "description": "Color/Type. (usually, only sword characters that have multiple sword glow textures can change the color of this)"
      },
      {
        "type": "value",
        "label": "Blur Length",
        "description": "The length of the glow's aftershadow."
      },
      {
        "type": "value",
        "label": "Starting Bone",
        "description": "Bone the 1st point of the sword trail follows."
      },
      {
        "type": "scalar",
        "label": "1st Glow X Offset",
        "description": "X offset of the 1st point of the sword trail."
      },
      {
        "type": "scalar",
        "label": "1st Glow Y Offset",
        "description": "Y offset of the 1st point of the sword trail."
      },
      {
        "type": "scalar",
        "label": "1st Glow Z Offset",
        "description": "Z offset of the 1st point of the sword trail."
      },
      {
        "type": "value",
        "label": "2nd Bone",
        "description": "Bone the 2nd point of the sword trail follows. (usually the same as the first)"
      },
      {
        "type": "scalar",
        "label": "2nd Glow X Offset",
        "description": "X offset of the 2nd point of the sword trail."
      },
      {
        "type": "scalar",
        "label": "2nd Glow Y Offset",
        "description": "Y offset of the 2nd point of the sword trail."
      },
      {
        "type": "scalar",
        "label": "2nd Glow Z Offset",
        "description": "Z offset of the 2nd point of the sword trail."
      },
      {
        "type": "boolean",
        "label": "Glow State",
        "description": "If set to true, glow/trail disappears at the end of the sub action."
      },
      {
        "type": "value",
        "label": "Graphic",
        "description": "The file from which to call from/The graphical effect to call, where XXXXYYYY is X=File# Y=Graphic ID."
      },
      {
        "type": "value",
        "label": "Glow Bone",
        "description": "Bone the sword glow follows."
      },
      {
        "type": "scalar",
        "label": "X Offset",
        "description": "X offset of sword glow."
      },
      {
        "type": "scalar",
        "label": "Y Offset",
        "description": "Y offset of sword glow."
      },
      {
        "type": "scalar",
        "label": "Z Offset",
        "description": "Z offset of sword glow."
      },
      {
        "type": "scalar",
        "label": "X Rotation",
        "description": "Rotation of the sword glow around the X axis."
      },
      {
        "type": "scalar",
        "label": "Y Rotation",
        "description": "Rotation of the sword glow around the Y axis."
      },
      {
        "type": "scalar",
        "label": "Z Rotation",
        "description": "Rotation of the sword glow around the Z axis."
      },
      {
        "type": "scalar",
        "label": "Glow Length",
        "description": "Length of the sword glow, i.e. halving this value will make it half the sword's length."
      },
      {
        "type": "value",
        "label": "Value",
        "description": "No Description Available."
      },
      {
        "type": "value",
        "label": "Value",
        "description": "No Description Available."
      },
      {
        "type": "scalar",
        "label": "Size",
        "description": "No Description Available."
      }
    ]
  },
  "11050100": {
    "name": "Terminate Sword Glow",
    "description": "Remove all Glow effects.",
    "parameters": [
      {
        "type": "value",
        "label": "Fade Time",
        "description": "The time it takes for the sword glow to fade out."
      }
    ]
  },
  "11150300": {
    "name": "Terminate Graphic Effect",
    "description": "Terminate a lingering graphical effect.",
    "parameters": [
      {
        "type": "value",
        "label": "Graphic",
        "description": "The file from which to call from/The graphical effect to call, where XXXXYYYY is X=File# Y=Graphic ID."
      },
      {
        "type": "boolean",
        "label": "Boolean",
        "description": "No Description Available."
      },
      {
        "type": "boolean",
        "label": "Boolean",
        "description": "No Description Available."
      }
    ]
  },
  "11170600": {
    "name": "Screen Tint",
    "description": "Tint the screen to the specified color.",
    "parameters": [
      {
        "type": "value",
        "label": "Undefined",
        "description": "Undefined."
      },
      {
        "type": "unknown",
        "label": "Transition Time",
        "description": "The time taken to transition from its current color to the specified color."
      },
      {
        "type": "unknown",
        "label": "Red",
        "description": "The red value."
      },
      {
        "type": "unknown",
        "label": "Green",
        "description": "The green value."
      },
      {
        "type": "unknown",
        "label": "Blue",
        "description": "The blue value."
      },
      {
        "type": "unknown",
        "label": "Alpha",
        "description": "The transperency."
      },
      {
        "type": "unknown",
        "label": "Undefined",
        "description": "Undefined."
      }
    ]
  },
  "11170700": {
    "name": "Screen Tint",
    "description": "Tint the screen to the specified color.",
    "parameters": []
  },
  "11180200": {
    "name": "End Screen Tint",
    "description": "End Screen Tint.",
    "parameters": []
  },
  "12000200": {
    "name": "Basic Variable Set",
    "description": "Set a basic variable to the specified value.",
    "parameters": [
      {
        "type": "value",
        "label": "Value",
        "description": "the value to place inside the specified variable."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The Basic type variable to access."
      }
    ]
  },
  "12010200": {
    "name": "Basic Variable Add",
    "description": "Add a specified value to a basic variable.",
    "parameters": [
      {
        "type": "value",
        "label": "Value",
        "description": "the value add to the specified variable."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The Basic type variable to access."
      }
    ]
  },
  "12020200": {
    "name": "Basic Variable Subtract",
    "description": "Subtract a specified value from a basic variable.",
    "parameters": [
      {
        "type": "value",
        "label": "Value",
        "description": "the value to subtract from the specified variable."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The Basic type variable to access."
      }
    ]
  },
  "12030100": {
    "name": "Basic Variable Increment",
    "description": "Variable++",
    "parameters": [
      {
        "type": "variable",
        "label": "Variable",
        "description": "The variable to increment."
      }
    ]
  },
  "12040100": {
    "name": "Basic Variable Decrement",
    "description": "Variable--",
    "parameters": [
      {
        "type": "variable",
        "label": "Variable",
        "description": "The variable to decrement."
      }
    ]
  },
  "12050300": {
    "name": "Basic Variable Random",
    "description": "Load a basic variable with a random integer.",
    "parameters": [
      {
        "type": "scalar",
        "label": "Value",
        "description": "The minimum random value to load."
      },
      {
        "type": "scalar",
        "label": "Value",
        "description": "The maximum random value to load."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The Basic type variable to access."
      }
    ]
  },
  "12060200": {
    "name": "Float Variable Set",
    "description": "Set a floating point variable to the specified value.",
    "parameters": [
      {
        "type": "scalar",
        "label": "Value",
        "description": "The floating point value to place inside the specified variable."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The Float type variable to access."
      }
    ]
  },
  "12070200": {
    "name": "Float Variable Add",
    "description": "Add a specified value to a float variable.",
    "parameters": [
      {
        "type": "scalar",
        "label": "Value",
        "description": "The floating point value to add to the specified variable."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The Float type variable to access."
      }
    ]
  },
  "12080200": {
    "name": "Float Variable Subtract",
    "description": "Subtract a specified value from a float variable.",
    "parameters": [
      {
        "type": "scalar",
        "label": "Value",
        "description": "The floating point value to subtract from the specified variable."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The Float type variable to access."
      }
    ]
  },
  "12100200": {
    "name": "Float Variable Divide",
    "description": "Divide a specified value with a float variable.",
    "parameters": [
      {
        "type": "scalar",
        "label": "Value",
        "description": "The floating point value to divide with the specified variable."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The Float type variable to access."
      }
    ]
  },
  "12110200": {
    "name": "Basic Variable Set Absolute",
    "description": "Sets a Basic type variable to the absolute value of the specified value",
    "parameters": [
      {
        "type": "value",
        "label": "Value",
        "description": "The value to set the basic equal to."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The Basic type variable to be set."
      }
    ]
  },
  "12120200": {
    "name": "Float Variable Set Absolute",
    "description": "Set a float variable equal to the absolute value of some float.",
    "parameters": [
      {
        "type": "scalar",
        "label": "Value",
        "description": "The floating point value to set the variable equal to."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The Float type variable to access."
      }
    ]
  },
  "12200200": {
    "name": "Attribute Range Set (Custom)",
    "description": "Requires the On the Fly Attribute Modification code by Mawootad.",
    "parameters": [
      {
        "type": "scalar",
        "label": "Value",
        "description": "The value to set the variable(s) to."
      },
      {
        "type": "variable",
        "label": "Variable Range",
        "description": "An IC-Basic where the ID is, in hex, of the form 0xBBBAAA, where attributes AAA to BBB inclusive are written to. If BBB < AAA, only AAA is written to."
      }
    ]
  },
  "12210200": {
    "name": "Attribute Range Add (Custom)",
    "description": "Requires the On the Fly Attribute Modification code by Mawootad.",
    "parameters": [
      {
        "type": "scalar",
        "label": "Value",
        "description": "The value to add to the variable(s)."
      },
      {
        "type": "variable",
        "label": "Variable Range",
        "description": "An IC-Basic where the ID is, in hex, of the form 0xBBBAAA, where attributes AAA to BBB inclusive are written to. If BBB < AAA, only AAA is written to."
      }
    ]
  },
  "12220200": {
    "name": "Attribute Range Subtract (Custom)",
    "description": "Requires the On the Fly Attribute Modification code by Mawootad.",
    "parameters": [
      {
        "type": "scalar",
        "label": "Value",
        "description": "The value to subtract the variable(s) by."
      },
      {
        "type": "variable",
        "label": "Variable Range",
        "description": "An IC-Basic where the ID is, in hex, of the form 0xBBBAAA, where attributes AAA to BBB inclusive are written to. If BBB < AAA, only AAA is written to."
      }
    ]
  },
  "12230200": {
    "name": "Attribute Range Multiply (Custom)",
    "description": "Requires the On the Fly Attribute Modification code by Mawootad.",
    "parameters": [
      {
        "type": "scalar",
        "label": "Value",
        "description": "The value to mulitply the variable(s) by."
      },
      {
        "type": "variable",
        "label": "Variable Range",
        "description": "An IC-Basic where the ID is, in hex, of the form 0xBBBAAA, where attributes AAA to BBB inclusive are written to. If BBB < AAA, only AAA is written to."
      }
    ]
  },
  "12240200": {
    "name": "Attribute Range Divide (Custom)",
    "description": "Requires the On the Fly Attribute Modification code by Mawootad.",
    "parameters": [
      {
        "type": "scalar",
        "label": "Value",
        "description": "The value to divide the variable(s) by."
      },
      {
        "type": "variable",
        "label": "Variable Range",
        "description": "An IC-Basic where the ID is, in hex, of the form 0xBBBAAA, where attributes AAA to BBB inclusive are written to. If BBB < AAA, only AAA is written to."
      }
    ]
  },
  "14040100": {
    "name": "Terminate Wind Effect",
    "description": "Ends the wind effect spawned by the \"Aesthetic Wind Effect\" event.",
    "parameters": [
      {
        "type": "value",
        "label": "Model ID?",
        "description": "Puts away an model that was summoned. (Usually set to Article/Model ID..sometimes 0. This works with characters who have articles in their texture or vertext file. For example, mario, ike, pit, etc)"
      }
    ]
  },
  "14050100": {
    "name": "Aesthetic Wind 05",
    "description": "Affects wind.",
    "parameters": [
      "boolean"
    ]
  },
  "17000000": {
    "name": "Physics Normalize",
    "description": "Returns to normal physics.",
    "parameters": []
  },
  "17010000": {
    "name": "Physics 01",
    "description": "Undefined.",
    "parameters": []
  },
  "17050000": {
    "name": "Physics 05",
    "description": "Undefined.",
    "parameters": []
  },
  "18000100": {
    "name": "Slope Contour Stand",
    "description": "Moves specific parts of the character if on sloped ground?",
    "parameters": []
  },
  "18010200": {
    "name": "Slope Contour Full?",
    "description": "Moves entire character to match sloped ground?",
    "parameters": []
  },
  "18010300": {
    "name": "Character Spef GFX",
    "description": "Appears to control posture graphics.",
    "parameters": []
  },
  "18030200": {
    "name": "Character Specific 03",
    "description": "Undefined. Used in Samus.",
    "parameters": []
  },
  "19010000": {
    "name": "Module19 01",
    "description": "Undefined.",
    "parameters": []
  },
  "20000200": {
    "name": "Turn 00",
    "description": "unknown.",
    "parameters": []
  },
  "21000000": {
    "name": "Terminate Flash Effect",
    "description": "Terminate all currently active flash effects.",
    "parameters": []
  },
  "21010400": {
    "name": "Flash Overlay Effect",
    "description": "Generate a flash overlay effect over the character with the specified colors and opacity. Replaces any currently active flash effects.",
    "parameters": [
      {
        "type": "value",
        "label": "Red",
        "description": "The red value from 0-255."
      },
      {
        "type": "unknown",
        "label": "Green",
        "description": "The green value from 0-255."
      },
      {
        "type": "unknown",
        "label": "Blue",
        "description": "The blue value from 0-255."
      },
      {
        "type": "unknown",
        "label": "Alpha",
        "description": "The alpha value from 0-255 (0 = fully transparent, 255 = fully opaque)."
      }
    ]
  },
  "21020500": {
    "name": "Change Flash Overlay Color",
    "description": "Changes the color of the current flash overlay effect.",
    "parameters": [
      {
        "type": "value",
        "label": "Transition Time",
        "description": "Number of frames to transition to the new color."
      },
      {
        "type": "unknown",
        "label": "Red",
        "description": "The red value (0-255) of the target color."
      },
      {
        "type": "unknown",
        "label": "Green",
        "description": "The green value (0-255) of the target color."
      },
      {
        "type": "unknown",
        "label": "Blue",
        "description": "The blue value (0-255) of the target color."
      },
      {
        "type": "unknown",
        "label": "Alpha",
        "description": "The alpha value (0-255, 0 = fully transparent, 255 = fully opaque) of the target color."
      }
    ]
  },
  "21050600": {
    "name": "Flash Light Effect",
    "description": "Generate a flash lighting effect over the character with the specified colors, opacity and angle. Replaces any currently active flash effects.",
    "parameters": [
      {
        "type": "value",
        "label": "Red",
        "description": "The red value from 0-255. "
      },
      {
        "type": "value",
        "label": "Green",
        "description": "The green value from 0-255. "
      },
      {
        "type": "value",
        "label": "Blue",
        "description": "The blue value from 0-255. "
      },
      {
        "type": "value",
        "label": "Alpha",
        "description": "The alpha value from 0-255 (0 = fully transparent, 255 = fully opaque)."
      },
      {
        "type": "scalar",
        "label": "Light Source X",
        "description": "X position of the light source."
      },
      {
        "type": "scalar",
        "label": "Light Source Y",
        "description": "Y position of the light source."
      }
    ]
  },
  "21070500": {
    "name": "Change Flash Light Color",
    "description": "Changes the color of the current flash light effect.",
    "parameters": [
      {
        "type": "value",
        "label": "Transition Time",
        "description": "Number of frames to transition to the new color."
      },
      {
        "type": "unknown",
        "label": "Red",
        "description": "The red value (0-255) of the target color. "
      },
      {
        "type": "unknown",
        "label": "Green",
        "description": "The green value (0-255) of the target color. "
      },
      {
        "type": "unknown",
        "label": "Blue",
        "description": "The blue value (0-255) of the target color. "
      },
      {
        "type": "unknown",
        "label": "Alpha",
        "description": "The alpha value from 0-255 (0 = fully transparent, 255 = fully opaque)."
      }
    ]
  },
  "64000000": {
    "name": "Allow Interrupt",
    "description": "Allow the current action to be interrupted by another action.",
    "parameters": []
  },
  "64010000": {
    "name": "Disallow Interrupt",
    "description": "Disable all interrupts on the current action.",
    "parameters": []
  },
  "00010100": {
    "name": "Synchronous Timer",
    "description": "Pause the current flow of events until the set time is reached. Synchronous timers count down when they are reached in the code.",
    "parameters": [
      {
        "type": "scalar",
        "label": "Frames",
        "description": "The number of frames to wait."
      }
    ]
  },
  "00020000": {
    "name": "No Event",
    "description": "No Event.",
    "parameters": []
  },
  "00020100": {
    "name": "Asynchronous Timer",
    "description": "Pause the current flow of events until the set time is reached. Asynchronous Timers start counting from the beginning of the animation.",
    "parameters": [
      {
        "type": "scalar",
        "label": "Frames",
        "description": "The number of frames to wait."
      }
    ]
  },
  "00040100": {
    "name": "Set Loop",
    "description": "Set a loop for X iterations.",
    "parameters": [
      {
        "type": "value",
        "label": "Iterations",
        "description": "The number of times to loop."
      }
    ]
  },
  "00050000": {
    "name": "Execute Loop",
    "description": "Execute the the previously set loop.",
    "parameters": []
  },
  "00060000": {
    "name": "Loop Break?",
    "description": "Breaks out of the current loop?",
    "parameters": []
  },
  "00070100": {
    "name": "Sub Routine",
    "description": "Enter the event routine specified and return after ending.",
    "parameters": [
      {
        "type": "pointer",
        "label": "Offset",
        "description": "The offset inside the file to jump to."
      }
    ]
  },
  "00080000": {
    "name": "Return",
    "description": "Return from a Subroutine.",
    "parameters": []
  },
  "00090100": {
    "name": "Goto",
    "description": "Goto the event location specified and execute.",
    "parameters": [
      {
        "type": "pointer",
        "label": "Offset",
        "description": "The offset inside the file to jump to."
      }
    ]
  },
  "000A0100": {
    "name": "If",
    "description": "Start an If block until an Else or an EndIf is reached.",
    "parameters": [
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "The form of requirement used in evaluation of the event."
      },
      {
        "type": "unknown",
        "label": "Variable",
        "description": "The variable applied to the requirement."
      },
      {
        "type": "unknown",
        "label": "Unknown",
        "description": "Unknown."
      }
    ]
  },
  "000A0200": {
    "name": "If",
    "description": "Start an If block until an Else or an EndIf is reached.",
    "parameters": [
      "requirement",
      "variable"
    ]
  },
  "000A0400": {
    "name": "If",
    "description": "Start an If block until an Else or an EndIf is reached.",
    "parameters": [
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "The form of requirement used in evaluation of the event."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The first variable in the comparison requirement."
      },
      {
        "type": "value",
        "label": "Comparison Method",
        "description": "The method used to compare the two variables. From 0 to 5: <, <=, =, !=, >=, >"
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The second variable in the comparison requirement."
      }
    ]
  },
  "000B0100": {
    "name": "And",
    "description": "Seems to be an \"and\" to an If statement.",
    "parameters": [
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "The form of requirement used in evaluation of the event."
      },
      {
        "type": "unknown",
        "label": "Variable",
        "description": "The variable applied to the requirement."
      },
      {
        "type": "unknown",
        "label": "Unknown",
        "description": "Unknown."
      }
    ]
  },
  "000B0200": {
    "name": "And",
    "description": "Seems to be an \"and\" to an If statement.",
    "parameters": [
      "requirement",
      "variable"
    ]
  },
  "000B0400": {
    "name": "And Comparison",
    "description": "Seems to be an \"And\" to an If statement.",
    "parameters": [
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "The form of requirement used in evaluation of the event."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The first variable in the comparison requirement."
      },
      {
        "type": "value",
        "label": "Comparison Method",
        "description": "The method used to compare the two variables. From 0 to 5: <, <=, =, !=, >=, >"
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The second variable in the comparison requirement."
      }
    ]
  },
  "000C0100": {
    "name": "Or",
    "description": "Insert an alternate requirement to fall back on if the above requirement(s) are not met.",
    "parameters": [
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "The form of requirement used in evaluation of the event."
      },
      {
        "type": "unknown",
        "label": "Variable",
        "description": "The variable applied to the requirement."
      },
      {
        "type": "unknown",
        "label": "Unknown",
        "description": "Unknown."
      }
    ]
  },
  "000C0200": {
    "name": "Or",
    "description": "Insert an alternate requirement to fall back on if the above requirement(s) are not met.",
    "parameters": [
      "requirement",
      "variable"
    ]
  },
  "000C0400": {
    "name": "Or Comparison",
    "description": "Insert an alternate requirement to fall back on if the above requirement(s) are not met.",
    "parameters": [
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "The form of requirement used in evaluation of the event."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The first variable in the comparison requirement."
      },
      {
        "type": "value",
        "label": "Comparison Method",
        "description": "The method used to compare the two variables. From 0 to 5: <, <=, =, !=, >=, >"
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The second variable in the comparison requirement."
      }
    ]
  },
  "000D0100": {
    "name": "Else If",
    "description": "Insert an Else If block inside of an If block.",
    "parameters": [
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "The form of requirement used in evaluation of the event."
      },
      {
        "type": "unknown",
        "label": "Variable",
        "description": "The variable applied to the requirement."
      },
      {
        "type": "unknown",
        "label": "Unknown",
        "description": "Unknown."
      }
    ]
  },
  "000D0200": {
    "name": "Else If",
    "description": "Insert an Else If block inside of an If block.",
    "parameters": [
      "requirement",
      "variable"
    ]
  },
  "000D0400": {
    "name": "Else If Comparison",
    "description": "Insert an Else If block inside of an If block.",
    "parameters": [
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "The form of requirement used in evaluation of the event."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The first variable in the comparison requirement."
      },
      {
        "type": "value",
        "label": "Comparison Method",
        "description": "The method used to compare the two variables. From 0 to 5: <, <=, =, !=, >=, >"
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The second variable in the comparison requirement."
      }
    ]
  },
  "000E0000": {
    "name": "Else",
    "description": "Insert an Else block inside an If block.",
    "parameters": []
  },
  "000F0000": {
    "name": "End If",
    "description": "End an If block.",
    "parameters": []
  },
  "00100200": {
    "name": "Switch",
    "description": "Begin a multiple case Switch block.",
    "parameters": [
      {
        "type": "value",
        "label": "Status ID?",
        "description": "Unknown. Appears to often (if not always) be set to 0x2710 (IC-Basic[10000])."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The variable that will be compared against the case values. Can also be a requirement such as \"Roll A Die\""
      }
    ]
  },
  "00110100": {
    "name": "Case",
    "description": "Handler for if the variable in the switch statement equals the specified value.",
    "parameters": []
  },
  "00120000": {
    "name": "Default Case",
    "description": "The case chosen if none of the others are executed.",
    "parameters": []
  },
  "00130000": {
    "name": "End Switch",
    "description": "End a Switch block.",
    "parameters": []
  },
  "00180000": {
    "name": "Break",
    "description": "Appears within Case statements; exits the switch event completely. All code located in the same case block after this event will not be executed.",
    "parameters": []
  },
  "01010000": {
    "name": "Loop Rest",
    "description": "Stop subsequent loads until the \"Set Loop Resume Requirement\" is achieved.",
    "parameters": []
  },
  "02000300": {
    "name": "Change Action Status",
    "description": "Change the current action upon the specified requirement being met. (the requirement does not have to be met at the time this ID is executed - it can be used anytime after execution.)",
    "parameters": [
      {
        "type": "value",
        "label": "Status ID",
        "description": "The four-digit status ID of the change action event. Can later be disabled via 02080100 (Disable Action Status ID)."
      },
      {
        "type": "value",
        "label": "Action",
        "description": "The ID of the action that the character will execute."
      },
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "The form of requirement used in evaluation of the event."
      },
      {
        "type": "unknown",
        "label": "Variable",
        "description": "The variable applied to the requirement."
      },
      {
        "type": "unknown",
        "label": "Unknown",
        "description": "Unknown."
      }
    ]
  },
  "02010200": {
    "name": "Change Action",
    "description": "Change the current action upon the specified requirement being met. (the requirement does not have to be met at the time this ID is executed - it can be used anytime after execution.)",
    "parameters": [
      {
        "type": "value",
        "label": "Action",
        "description": "The ID of the action that the character will execute."
      },
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "The form of requirement used in evaluation of the event."
      },
      {
        "type": "unknown",
        "label": "Variable",
        "description": "The variable applied to the requirement."
      },
      {
        "type": "unknown",
        "label": "Unknown",
        "description": "Unknown."
      }
    ]
  },
  "02010300": {
    "name": "Change Action",
    "description": "Change the current action upon the specified requirement being met. (the requirement does not have to be met at the time this ID is executed - it can be used anytime after execution.)",
    "parameters": [
      "value",
      "requirement",
      "variable"
    ]
  },
  "02010500": {
    "name": "Change Action",
    "description": "Change the current action upon the specified requirement being met. (the requirement does not have to be met at the time this ID is executed - it can be used anytime after execution.)",
    "parameters": [
      {
        "type": "value",
        "label": "Action",
        "description": "The ID of the action that the character will execute."
      },
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "The form of requirement used in evaluation of the event."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The first variable in the comparison requirement."
      },
      {
        "type": "value",
        "label": "Comparison Method",
        "description": "The method used to compare the two variables. From 0 to 5: <, <=, =, !=, >=, >"
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The second variable in the comparison requirement."
      }
    ]
  },
  "02040100": {
    "name": "Additional Action Requirement",
    "description": "Add an additional requirement to the preceeding Change Action statement.",
    "parameters": [
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "The form of requirement used in evaluation of the event."
      },
      {
        "type": "unknown",
        "label": "Variable",
        "description": "The variable applied to the requirement."
      },
      {
        "type": "unknown",
        "label": "Unknown",
        "description": "Unknown."
      }
    ]
  },
  "02040200": {
    "name": "Additional Action Requirement",
    "description": "Add an additional requirement to the preceeding Change Action statement.",
    "parameters": [
      "requirement",
      "variable"
    ]
  },
  "02040400": {
    "name": "Additional Action Requirement",
    "description": "Add an additional requirement to the preceeding Change Action statement.",
    "parameters": [
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "The form of requirement used in evaluation of the event."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The first variable in the comparison requirement."
      },
      {
        "type": "value",
        "label": "Comparison Method",
        "description": "The method used to compare the two variables. From 0 to 5: <, <=, =, !=, >=, >"
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The second variable in the comparison requirement."
      }
    ]
  },
  "02050300": {
    "name": "Set Status ID Interrupt",
    "description": "Links a Status ID with an interrupt, which will only allow the interrupt to execute (or prevent) the Status ID when the Requirement is met (Warning: Persists globally and can cause memory leaks. Recommended for the on-load routine.)",
    "parameters": [
      {
        "type": "value",
        "label": "Interrupt ID",
        "description": "The interrupt to hook to. 1-Ground Special, 2-Ground Item, 3-Grab, 4-Ground Attack, 5-Ground Dodge, 6-Shield, 7-Ground Jump, 8-Ground (other), 9-Landing, A-Ledge Grab, B-Air Special, C-Air Item Throw, D-Air Grab, E-Air Dodge, F-Air Attack, 10-Footstool, 11-Wall Jump, 12-Air Jump, 13-Fall Through Plat(only works in squat)."
      },
      {
        "type": "value",
        "label": "Status ID",
        "description": "The Status ID to influence."
      },
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "If true, the status ID will be enabled, else disabled."
      }
    ]
  },
  "02050400": {
    "name": "Set Status ID Interrupt",
    "description": "Links a Status ID with an interrupt, which will only allow the interrupt to execute (or prevent) the Status ID when the Requirement is met (Warning: Persists globally and can cause memory leaks. Recommended for the on-load routine.)",
    "parameters": [
      {
        "type": "value",
        "label": "Interrupt ID",
        "description": "The interrupt to hook to. 1-Ground Special, 2-Ground Item, 3-Grab, 4-Ground Attack, 5-Ground Dodge, 6-Shield, 7-Ground Jump, 8-Ground (other), 9-Landing, A-Ledge Grab, B-Air Special, C-Air Item Throw, D-Air Grab, E-Air Dodge, F-Air Attack, 10-Footstool, 11-Wall Jump, 12-Air Jump, 13-Fall Through Plat(only works in squat)."
      },
      {
        "type": "value",
        "label": "Status ID",
        "description": "The Status ID to affect."
      },
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "If true, the status ID will be enabled, else disabled."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The variable applied to the requirement."
      }
    ]
  },
  "02050600": {
    "name": "Set Status ID Interrupt",
    "description": "Links a Status ID with an interrupt, which will only allow the interrupt to execute (or prevent) the Status ID when the Requirement is met (Warning: Persists globally and can cause memory leaks. Recommended for the on-load routine.)",
    "parameters": [
      {
        "type": "value",
        "label": "Interrupt ID",
        "description": "The interrupt to hook to. 1-Ground Special, 2-Ground Item, 3-Grab, 4-Ground Attack, 5-Ground Dodge, 6-Shield, 7-Ground Jump, 8-Ground (other), 9-Landing, A-Ledge Grab, B-Air Special, C-Air Item Throw, D-Air Grab, E-Air Dodge, F-Air Attack, 10-Footstool, 11-Wall Jump, 12-Air Jump, 13-Fall Through Plat(only works in squat)."
      },
      {
        "type": "value",
        "label": "Status ID",
        "description": "The Status ID to affect."
      },
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "If true, the status ID will be enabled, else disabled."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The first variable in the comparison requirement."
      },
      {
        "type": "value",
        "label": "Comparison Method",
        "description": "The method used to compare the two variables. From 0 to 5: <, <=, =, !=, >=, >"
      },
      {
        "type": "scalar",
        "label": "Variable",
        "description": "The second variable in the comparison requirement."
      }
    ]
  },
  "02060100": {
    "name": "Disable Other Status ID",
    "description": "Enables the given Status ID.",
    "parameters": [
      {
        "type": "value",
        "label": "Status ID",
        "description": "The Status ID to enable."
      }
    ]
  },
  "04000100": {
    "name": "Change Sub Action",
    "description": "Change the current sub action.",
    "parameters": [
      {
        "type": "value",
        "label": "Sub Action",
        "description": "The ID of the sub action that the character will execute."
      },
      {
        "type": "unknown",
        "label": "Pass Frame",
        "description": "Weather to pass the current frame of the current animation onto the new animation."
      },
      {
        "type": "unknown",
        "label": "Sub Action Frame Speed",
        "description": "How many times faster the frames are."
      }
    ]
  },
  "04000200": {
    "name": "Change Sub Action",
    "description": "Change the current sub action. Can specify whether or not to pass the current frame or start the animation over.",
    "parameters": [
      "value",
      "boolean"
    ]
  },
  "05000000": {
    "name": "Reverse Direction",
    "description": "The object is now considered to be facing the other direction. It will not visually change direction until the current animation ends or is interrupted.",
    "parameters": []
  },
  "06000D00": {
    "name": "Offensive Collision",
    "description": "Generate an offensive collision bubble with the specified parameters. Helpful info: tinyurl.com/HitboxParam",
    "parameters": [
      {
        "type": "value",
        "label": "Bone/ID",
        "description": "The bone the collision bubble is attached to / the ID number of the collision bubble; XXXXYYYY where X=Bone, Y=ID."
      },
      {
        "type": "value",
        "label": "Damage",
        "description": "The amount of damage inflicted to the target upon collision."
      },
      {
        "type": "value",
        "label": "Trajectory",
        "description": "The direction in which a target gets launched."
      },
      {
        "type": "value",
        "label": "WDSK/KBG",
        "description": "(full info can be read at tinyurl.com/HitboxParam) Data entry is XXXXYYYY, where X=WDSK and Y=KBG. WDSK stands for Weight Dependent Set Knockback, and only has an effect when set to a value other than 0 (this uses a unique formula, found in the pastebin). KBG stands for KnockBack Growth but actually has very little to do with scaling knockback. Remember that a KBG of 0 is NOT what causes set knockback!"
      },
      {
        "type": "value",
        "label": "Shield Damage/BKB",
        "description": "(full info can be read at tinyurl.com/HitboxParam) The amount of damage dealt to the target's shield if it is up/The distance the target is launched regardless of its damage (zero for fixed knockback hits). Where XXXXYYYY is X=Shield Damage, Y=Base Knockback."
      },
      {
        "type": "scalar",
        "label": "Size",
        "description": "The size of the collision bubble."
      },
      {
        "type": "scalar",
        "label": "Z Offset",
        "description": "The offset in the Z direction from the attached bone (affected by its rotation). (Note: BrawlBox incorrectly calls this X on some screens.)"
      },
      {
        "type": "scalar",
        "label": "Y Offset",
        "description": "The offset in the Y direction from the attached bone (affected by its rotation)."
      },
      {
        "type": "scalar",
        "label": "X Offset",
        "description": "The offset in the X direction from the attached bone (affected by its rotation). (Note: BrawlBox incorrectly calls this X on some screens.)"
      },
      {
        "type": "scalar",
        "label": "Tripping Rate",
        "description": "The percent possibility of the collision bubble inducing a trip, provided the target doesn't leave the ground from the knockback. (1 = 100%)"
      },
      {
        "type": "scalar",
        "label": "Hitlag Multiplier",
        "description": "A multiplier affecting the time in which both parties pause when the collision bubble connects."
      },
      {
        "type": "scalar",
        "label": "SDI Multiplier",
        "description": "Smash Directional Influence Multiplier; affects the ability for the character maneuver themselves a small amount while in hitlag by this collision bubble."
      },
      {
        "type": "value",
        "label": "Flags",
        "description": "Flags for various parameters such as hit effects and sound effects. These might help: tinyurl.com/HitboxFlagParser http://tinyurl.com/HitboxFlagInfo"
      }
    ]
  },
  "06040000": {
    "name": "Terminate Collisions",
    "description": "Remove all currently present collision bubbles",
    "parameters": []
  },
  "06050100": {
    "name": "Body Collision",
    "description": "Change how the character's own collision bubbles act. (primarily used to invoke invulnerability)",
    "parameters": [
      {
        "type": "value",
        "label": "State",
        "description": "The state in which the character's body collision are put in.( 0=normal, 01=invinsible, 02=intangeble, 03=intangeble no flash, 04=intangeble quick flashing effect added)"
      }
    ]
  },
  "06080200": {
    "name": "Bone Collision",
    "description": "Sets specific bones to a type of body collision.",
    "parameters": [
      {
        "type": "value",
        "label": "Bone",
        "description": "Bone to be affected."
      },
      {
        "type": "unknown",
        "label": "Type",
        "description": "Type of body collision."
      }
    ]
  },
  "06060100": {
    "name": "Undo Bone Collision",
    "description": "Sets bones to their normal collision type.",
    "parameters": []
  },
  "060A0800": {
    "name": "Catch Collision",
    "description": "Generate a grabbing collision bubble with the specified parameters",
    "parameters": [
      {
        "type": "value",
        "label": "ID",
        "description": "ID of catch collision."
      },
      {
        "type": "value",
        "label": "Bone",
        "description": "The bone the grab is attached to."
      },
      {
        "type": "scalar",
        "label": "Size",
        "description": "The size of the catch collision bubble."
      },
      {
        "type": "scalar",
        "label": "X Offset",
        "description": "Transition relative to the currently attached bone."
      },
      {
        "type": "scalar",
        "label": "Y Offset",
        "description": "Transition relative to the currently attached bone."
      },
      {
        "type": "scalar",
        "label": "Z Offset",
        "description": "Transition relative to the currently attached bone."
      },
      {
        "type": "value",
        "label": "Action",
        "description": "The Action ID that the foe executes if successfully grabbed."
      },
      {
        "type": "value",
        "label": "Air/Ground",
        "description": "0 = grabs nothing, 1 = grabs grounded only, 2 = grabs aerial only, 3 = grabs aerial and grounded."
      },
      {
        "type": "unknown",
        "label": "Value",
        "description": "Unknown."
      },
      {
        "type": "unknown",
        "label": "Boolean",
        "description": "Unknown."
      }
    ]
  },
  "060D0000": {
    "name": "Terminate Catch Collisions",
    "description": "Remove all currently present grab collision bubbles",
    "parameters": []
  },
  "060E1100": {
    "name": "Throw Attack Collision",
    "description": "Specify the properties of the throw to be used when 060F0500 is executed. Used for other things as well, such as some Final Smashes.",
    "parameters": [
      {
        "type": "value",
        "label": "ID",
        "description": "ID of throw data. Seemingly, a \"0\" indicates this is the throw data, while a \"1\" indicates this is used if the opponent escapes during the throw. \"2\" has also been seen (by Light Arrow)."
      },
      {
        "type": "value",
        "label": "Bone?",
        "description": "Possibly bone used by collision. usually 0."
      },
      {
        "type": "value",
        "label": "Damage",
        "description": "The amount of damage inflicted to the target on throw."
      },
      {
        "type": "value",
        "label": "Trajectory",
        "description": "The direction in which the target gets launched."
      },
      {
        "type": "value",
        "label": "Knockback Growth",
        "description": "The additional distance the target is launched proportional to its damage."
      },
      {
        "type": "value",
        "label": "Weight Knockback",
        "description": "The distance the target is launched proportional to weight. Set to non-zero values only for fixed knockback throws."
      },
      {
        "type": "value",
        "label": "Base Knockback",
        "description": "The distance the target is launched regardless of its damage. Set to zero for fixed knockback throws."
      },
      {
        "type": "value",
        "label": "Element",
        "description": "The \"hit type\" of the throw. 0 typical, 2 slash, 3 electric, 4 ice, 5 flame, 6 coin, 8 slip, 9 sleep, B impale, C stun (deku nut), E flower, 13 darkness, 14 stun (ZSS), 15 aura, 17 knock down, 18 no flinch."
      },
      {
        "type": "scalar",
        "label": "Tripping Rate?",
        "description": "usually set to 0."
      },
      {
        "type": "scalar",
        "label": "Hitlag Multiplier?",
        "description": "usually set to 1."
      },
      {
        "type": "scalar",
        "label": "SDI Multiplier?",
        "description": "usually set to 1."
      },
      {
        "type": "value",
        "label": "Undefined",
        "description": "Undefined."
      },
      {
        "type": "value",
        "label": "SFX",
        "description": "Sound effect played upon throw."
      },
      {
        "type": "value",
        "label": "Air/Ground",
        "description": "0 = Never Grabs, 1 = Only Grabs Grounded Foes, 2 = Only Grabs Aerial Foes, 3= Grabs Aerial and Grounded Foes."
      },
      {
        "type": "boolean",
        "label": "Hitlag Bolean",
        "description": "When True, hitlag multiplier of 0."
      },
      {
        "type": "boolean",
        "label": "Undefined",
        "description": "True or False Bolean, its usually true."
      },
      {
        "type": "value",
        "label": "Type?",
        "description": "Almost always 8, which is typical invincibility frame length, but also the Throwing type - and it's 2 (Body-type) for Bowser's Flying Slam, 0 for most special moves and transformation Final Smashes. That said, if it's type, that would mean Nana's throws are Typeless."
      }
    ]
  },
  "060F0500": {
    "name": "Throw Collision",
    "description": "Throws an opponent based on data provided by 060E1100.",
    "parameters": [
      {
        "type": "value",
        "label": "ID?",
        "description": "Similar to offensive collisions Action ID's can be 1,2, or 3: for example, if you have 1 throw collsion, you will set it to =0, however, if you have 3 throw collisions, you will have them ordered from 1(for the first), 2(for the second), and 3(and for the third collsion code)."
      },
      {
        "type": "value",
        "label": "Bone",
        "description": "Appears to always be the bone the thrown character is attached to."
      },
      {
        "type": "variable",
        "label": "Bone",
        "description": "The bone that the hitbubble is attached to."
      },
      {
        "type": "variable",
        "label": "Parameter 3",
        "description": "Usually RA BIT Basic Variable set at a value of 3."
      },
      {
        "type": "variable",
        "label": "Parameter 4",
        "description": "Usually RA BIT Basic Variable set at a value of 4."
      }
    ]
  },
  "06150F00": {
    "name": "Special Offensive Collision",
    "description": "Generate an offensive collision bubble - is able to achieve unique effects. Helpful info: tinyurl.com/HitboxParam",
    "parameters": [
      {
        "type": "value",
        "label": "Bone/ID",
        "description": "The bone the collision bubble is attached to / the ID number of the collision bubble; XXXXYYYY where X=Bone, Y=ID."
      },
      {
        "type": "value",
        "label": "Damage",
        "description": "The amount of damage inflicted to the target upon collision."
      },
      {
        "type": "value",
        "label": "Trajectory",
        "description": "The direction in which a target gets launched."
      },
      {
        "type": "value",
        "label": "WDSK/KBG",
        "description": "(full info can be read at tinyurl.com/HitboxParam) The distance the target is launched proportional to weight for fixed knockback hits/The additional distance the target is launched proportional to its damage (launch force for fixed knockback hits). Where XXXXYYYY is X=Weight Knockback, Y=Knockback Growth."
      },
      {
        "type": "value",
        "label": "Shield Damage/BKB",
        "description": "(full info can be read at tinyurl.com/HitboxParam) The amount of damage dealt to the target's shield if it is up/The distance the target is launched regardless of its damage (zero for fixed knockback hits). Where XXXXYYYY is X=Shield Damage, Y=Base Knockback."
      },
      {
        "type": "scalar",
        "label": "Size",
        "description": "The size of the collision bubble."
      },
      {
        "type": "scalar",
        "label": "Z Offset",
        "description": "The offset in the Z direction from the attached bone (affected by its rotation). (Note: BrawlBox incorrectly calls this X on some screens.)"
      },
      {
        "type": "scalar",
        "label": "Y Offset",
        "description": "The offset in the Y direction from the attached bone (affected by its rotation)."
      },
      {
        "type": "scalar",
        "label": "X Offset",
        "description": "The offset in the X direction from the attached bone (affected by its rotation). (Note: BrawlBox incorrectly calls this X on some screens.)"
      },
      {
        "type": "scalar",
        "label": "Tripping Rate",
        "description": "The percent possibility of the collision bubble inducing a trip, provided the target doesn't leave the ground from the knockback. (1 = 100%)"
      },
      {
        "type": "scalar",
        "label": "Hitlag Multiplier",
        "description": "A multiplier affecting the time in which both parties pause when the collision bubble connects."
      },
      {
        "type": "scalar",
        "label": "SDI Multiplier",
        "description": "Smash Directional Influence Multiplier; affects the ability for the character maneuver themselves a small amount while in hitlag by this collision bubble."
      },
      {
        "type": "value",
        "label": "Flags",
        "description": "Flags for various parameters such as hit effects and sound effects. These might help: tinyurl.com/HitboxFlagParser http://tinyurl.com/HitboxFlagInfo"
      },
      {
        "type": "value",
        "label": "Rehit Rate",
        "description": "How many frames between each hitbox refresh; for example a value of 8 will cause the hitbox to hit every 9 frames. A value of 0 disables refreshing; the hitbox will only hit once."
      },
      {
        "type": "value",
        "label": "Special Flags",
        "description": "Flags for hitbox type and attributes such as susceptibility to reflection and absorption. These might help: tinyurl.com/HitboxFlagParser http://tinyurl.com/HitboxFlagInfo"
      }
    ]
  },
  "06170300": {
    "name": "Defensive Collision",
    "description": "Generate a defensive collision bubble that nullifies close combat attacks.",
    "parameters": []
  },
  "06180300": {
    "name": "Defensive Collision Operation",
    "description": "Removes defensive collisions.",
    "parameters": []
  },
  "061B0500": {
    "name": "Move Hitbox",
    "description": "Repositions an already-existing hitbox.",
    "parameters": [
      {
        "type": "value",
        "label": "Hitbox ID",
        "description": "ID of the hitbox to be changed."
      },
      {
        "type": "value",
        "label": "New Bone",
        "description": "The bone the collision bubble is attached to"
      },
      {
        "type": "scalar",
        "label": "New Z Offset",
        "description": "Transition relative to the currently attached bone."
      },
      {
        "type": "scalar",
        "label": "New Y Offset",
        "description": "Transition relative to the currently attached bone."
      },
      {
        "type": "scalar",
        "label": "New X Offset",
        "description": "Transition relative to the currently attached bone."
      }
    ]
  },
  "061E0300": {
    "name": "Collision Related?",
    "description": "Unknown. Used for Pit's Down-B, potentially relating to a reflecting collision.",
    "parameters": []
  },
  "062B0D00": {
    "name": "Thrown Collision",
    "description": "Generates a damage collision bubble surrounding the character being thrown.",
    "parameters": [
      {
        "type": "value",
        "label": "Bone/ID",
        "description": "The bone the collision bubble is attached to / the ID number of the collision bubble; XXXXYYYY where X=Bone, Y=ID."
      },
      {
        "type": "value",
        "label": "Damage",
        "description": "The amount of damage inflicted to the target upon collision."
      },
      {
        "type": "value",
        "label": "Trajectory",
        "description": "The direction in which a target gets launched."
      },
      {
        "type": "value",
        "label": "WDSK/KBG",
        "description": "(full info can be read at tinyurl.com/HitboxParam) Data entry is XXXXYYYY, where X=WDSK and Y=KBG. WDSK stands for Weight Dependent Set Knockback, and only has an effect when set to a value other than 0 (this uses a unique formula, found in the pastebin). KBG stands for KnockBack Growth but actually has very little to do with scaling knockback. Remember that a KBG of 0 is NOT what causes set knockback!"
      },
      {
        "type": "value",
        "label": "Shield Damage/BKB",
        "description": "(full info can be read at tinyurl.com/HitboxParam) The amount of damage dealt to the target's shield if it is up/The distance the target is launched regardless of its damage (zero for fixed knockback hits). Where XXXXYYYY is X=Shield Damage, Y=Base Knockback."
      },
      {
        "type": "scalar",
        "label": "Size",
        "description": "The size of the collision bubble."
      },
      {
        "type": "scalar",
        "label": "Z Offset",
        "description": "The offset in the Z direction from the attached bone (affected by its rotation). (Note: BrawlBox incorrectly calls this X on some screens.)"
      },
      {
        "type": "scalar",
        "label": "Y Offset",
        "description": "The offset in the Y direction from the attached bone (affected by its rotation)."
      },
      {
        "type": "scalar",
        "label": "X Offset",
        "description": "The offset in the X direction from the attached bone (affected by its rotation). (Note: BrawlBox incorrectly calls this X on some screens.)"
      },
      {
        "type": "scalar",
        "label": "Tripping Rate",
        "description": "The percent possibility of the collision bubble inducing a trip, provided the target doesn't leave the ground from the knockback. (1 = 100%)"
      },
      {
        "type": "scalar",
        "label": "Hitlag Multiplier",
        "description": "A multiplier affecting the time in which both parties pause when the collision bubble connects."
      },
      {
        "type": "scalar",
        "label": "SDI Multiplier",
        "description": "Smash Directional Influence Multiplier; affects the ability for the character maneuver themselves a small amount while in hitlag by this collision bubble."
      },
      {
        "type": "value",
        "label": "Flags",
        "description": "Flags for various parameters such as hit effects and sound effects. These might help: tinyurl.com/HitboxFlagParser http://tinyurl.com/HitboxFlagInfo"
      }
    ]
  },
  "0A000100": {
    "name": "Sound Effect",
    "description": "Play a specified sound effect.",
    "parameters": [
      {
        "type": "value",
        "label": "Sound Effect",
        "description": "The ID number for the sound effect called."
      }
    ]
  },
  "0A010100": {
    "name": "Sound Effect",
    "description": "Play a specified sound effect.",
    "parameters": [
      {
        "type": "value",
        "label": "Sound Effect",
        "description": "The ID number for the sound effect called."
      }
    ]
  },
  "0A020100": {
    "name": "Sound Effect (Transient)",
    "description": "Play a specified sound effect. The sound effect ends with the animation.",
    "parameters": []
  },
  "0A050100": {
    "name": "Victory Sound Effect",
    "description": "Appears to play a sound effect. Used during victories as well as other places like Pit's taunts.",
    "parameters": []
  },
  "0A060000": {
    "name": "Unknown (Sound Effect)",
    "description": "Unknown. Related to sound effects.",
    "parameters": []
  },
  "0A090100": {
    "name": "Other Sound Effect (Landing?)",
    "description": "Play a specified sound effect plus a sound for landing on the current terrain - the values are different from normal sound effects.",
    "parameters": [
      {
        "type": "value",
        "label": "Sound Effect",
        "description": "The ID number for the sound effect called."
      }
    ]
  },
  "0A0A0100": {
    "name": "Other Sound Effect (Impact?)",
    "description": "Play a specified sound effect (plus a sound for smacking the current terrain?) - the values are different from normal sound effects. ",
    "parameters": [
      {
        "type": "value",
        "label": "Sound Effect",
        "description": "The ID number for the sound effect called."
      }
    ]
  },
  "0A030100": {
    "name": "Stop Sound Effect",
    "description": "Stops the specified sound effect immediately.",
    "parameters": [
      {
        "type": "value",
        "label": "Sound Effect",
        "description": "the ID number for the sound effect to stop."
      }
    ]
  },
  "0A070100": {
    "name": "Sound Effect 07",
    "description": "Play a specified sound effect. sound effect occurs when landing.(Exception: Mario's Fireball)",
    "parameters": [
      null
    ]
  },
  "0C050000": {
    "name": "Terminate Instance",
    "description": "Causes the acting instance to terminate (if possible). Will load secondary instance if available (i.e. character transformation).",
    "parameters": []
  },
  "0C0B0000": {
    "name": "Low Voice Clip",
    "description": "Plays a random voice clip from the selection of low voice clips. (Sound List 2, 0-3)",
    "parameters": []
  },
  "0C190000": {
    "name": "Damage Voice Clip",
    "description": "Plays a random voice clip from the selection of damage voice clips. (Sound List 0, 0-1; Sound List 1, 0-1)",
    "parameters": []
  },
  "0C1D0000": {
    "name": "Ottotto Voice Clip",
    "description": "Plays the voice clip for ottotto (ledge teeter). PM appears to repurpose this for an extra set of random voice clips.",
    "parameters": []
  },
  "0C1E0000": {
    "name": "Voice Clip 1E",
    "description": "It is used to play a voice clip for Attack or Ottotto.",
    "parameters": []
  },
  "04070100": {
    "name": "Frame Speed Modifier",
    "description": "Dictates the frame speed of the sub action. Example: Setting to 2 makes the animation and timers occur twice as fast.",
    "parameters": [
      {
        "type": "scalar",
        "label": "Multiplier",
        "description": "How many times faster the frames are."
      }
    ]
  },
  "0C230200": {
    "name": "Time Manipulation",
    "description": "Change the speed of time for various parts of the environment.Scalar=time stop, value=slow time. If you use a Scalar in parameter 0, then use parameter 1 to a value set how long time stops. if you use a value in parameter 0, use parameter 1 to set a value how long time slows. using a scalar in parameter 0 and 1 will stop time forever.",
    "parameters": [
      {
        "type": "value",
        "label": "Strength",
        "description": "The larger the value, the slower the enemy's movement. 4=Same as timer item. 1=Return to normal.."
      },
      {
        "type": "unknown",
        "label": "Frames",
        "description": "Duration time. Value 0x1E = 0.5sec"
      }
    ]
  },
  "0E000100": {
    "name": "Set Air/Ground",
    "description": "Sets the current physics state.",
    "parameters": [
      {
        "type": "value",
        "label": "State",
        "description": "The state of the character's air/ground status. 0 = In Air, 1 = On Ground, 10 = Control stick does not affect horizontal movement (or fastfall?)"
      }
    ]
  },
  "08000100": {
    "name": "Set Aerial/Onstage State",
    "description": "Determines whether or not the character will slide off the edge.",
    "parameters": [
      {
        "type": "value",
        "label": "Character State",
        "description": "1: Can drop off side of stage.  2: Can't drop off side of stage.  5: Treated as in air; can leave stage vertically.  Other states unknown."
      }
    ]
  },
  "100A0300": {
    "name": "Link Article to Bone",
    "description": "Used in Snake's Neutral B to attach the grenade to his hand.",
    "parameters": [
      {
        "type": "value",
        "label": "Article ID",
        "description": "ID of the article to be affected."
      },
      {
        "type": "unknown",
        "label": "Bone",
        "description": "ID of the bone to attach to."
      },
      {
        "type": "unknown",
        "label": "Undefined",
        "description": "Possibly decides which article to attach if multiple copies of a certain article are present."
      }
    ]
  },
  "100C0200": {
    "name": "Article Frame Speed",
    "description": "Change the animation speed of the article.",
    "parameters": [
      {
        "type": "value",
        "label": "Article ID",
        "description": "ID of the article to be affected."
      },
      {
        "type": "unknown",
        "label": "Multiplier",
        "description": "How many times faster the frames are."
      }
    ]
  },
  "11010A00": {
    "name": "Graphic Effect (Attached)",
    "description": "Generate a graphical effect. Moves with the bone it was attached to.",
    "parameters": [
      {
        "type": "value",
        "label": "Graphic",
        "description": "The file from which to call from/The graphical effect to call, where XXXXYYYY is X=File# Y=Graphic ID."
      },
      {
        "type": "value",
        "label": "Bone",
        "description": "The bone to attach the graphical effect to."
      },
      {
        "type": "scalar",
        "label": "Z Offset",
        "description": "Transition from the attached bone along the Z axis."
      },
      {
        "type": "scalar",
        "label": "Y Offset",
        "description": "Transition from the attached bone along the Y axis."
      },
      {
        "type": "scalar",
        "label": "X Offset",
        "description": "Transition from the attached bone along the X axis."
      },
      {
        "type": "scalar",
        "label": "Z Rotation",
        "description": "Rotation along the Z axis."
      },
      {
        "type": "scalar",
        "label": "Y Rotation",
        "description": "Rotation along the Y axis."
      },
      {
        "type": "scalar",
        "label": "X Rotation",
        "description": "Rotation along the X axis."
      },
      {
        "type": "scalar",
        "label": "Size",
        "description": "The size of the graphic."
      },
      {
        "type": "boolean",
        "label": "Terminate With Animation",
        "description": "Sets whether or not this graphic effect terminates when the animation ends."
      },
      {
        "type": "unknown",
        "label": "Extra Graphic Effect ID 1",
        "description": "Character's Color. usually set to 0."
      },
      {
        "type": "unknown",
        "label": "Extra Graphic Effect ID 2",
        "description": "Shield Effect Color. usually set to 0."
      }
    ]
  },
  "11020A00": {
    "name": "Graphic Effect (Attached)",
    "description": "Generate a graphical effect. Moves with the bone it was attached to.",
    "parameters": [
      {
        "type": "value",
        "label": "Graphic",
        "description": "The file from which to call from/The graphical effect to call, where XXXXYYYY is X=File# Y=Graphic ID."
      },
      {
        "type": "value",
        "label": "Bone",
        "description": "The bone to attach the graphical effect to."
      },
      {
        "type": "scalar",
        "label": "Z Offset",
        "description": "Transition from the attached bone along the Z axis."
      },
      {
        "type": "scalar",
        "label": "Y Offset",
        "description": "Transition from the attached bone along the Y axis."
      },
      {
        "type": "scalar",
        "label": "X Offset",
        "description": "Transition from the attached bone along the X axis."
      },
      {
        "type": "scalar",
        "label": "Z Rotation",
        "description": "Rotation along the Z axis."
      },
      {
        "type": "scalar",
        "label": "Y Rotation",
        "description": "Rotation along the Y axis."
      },
      {
        "type": "scalar",
        "label": "X Rotation",
        "description": "Rotation along the X axis."
      },
      {
        "type": "scalar",
        "label": "Size",
        "description": "The size of the graphic."
      },
      {
        "type": "boolean",
        "label": "Terminate With Animation",
        "description": "Sets whether or not this graphic effect terminates when the animation ends."
      },
      {
        "type": "unknown",
        "label": "Extra Graphic Effect ID 1",
        "description": "Character's Color. usually set to 0."
      },
      {
        "type": "unknown",
        "label": "Extra Graphic Effect ID 2",
        "description": "Shield Effect Color. usually set to 0."
      }
    ]
  },
  "111A1000": {
    "name": "Graphic Effect (Detached)",
    "description": "Generate a graphical effect. Stays at the spot it was spawned.",
    "parameters": [
      {
        "type": "value",
        "label": "Graphic",
        "description": "The file from which to call from/The graphical effect to call, where XXXXYYYY is X=File# Y=Graphic ID."
      },
      {
        "type": "value",
        "label": "Bone",
        "description": "The bone to attach the graphical effect to."
      },
      {
        "type": "scalar",
        "label": "Z Offset",
        "description": "Transition from the attached bone along the Z axis."
      },
      {
        "type": "scalar",
        "label": "Y Offset",
        "description": "Transition from the attached bone along the Y axis."
      },
      {
        "type": "scalar",
        "label": "X Offset",
        "description": "Transition from the attached bone along the X axis."
      },
      {
        "type": "scalar",
        "label": "Z Rotation",
        "description": "Rotation along the Z axis."
      },
      {
        "type": "scalar",
        "label": "Y Rotation",
        "description": "Rotation along the Y axis."
      },
      {
        "type": "scalar",
        "label": "X Rotation",
        "description": "Rotation along the X axis."
      },
      {
        "type": "scalar",
        "label": "Size",
        "description": "The size of the graphic."
      },
      {
        "type": "scalar",
        "label": "Random Z Offset",
        "description": "A random value lesser than the specified value and added to the Z Offset."
      },
      {
        "type": "scalar",
        "label": "Random Y Offset",
        "description": "A random value lesser than the specified value and added to the Y Offset."
      },
      {
        "type": "scalar",
        "label": "Random X Offset",
        "description": "A random value lesser than the specified value and added to the X Offset."
      },
      {
        "type": "scalar",
        "label": "Random Z Rotation",
        "description": "A random value lesser than the specified value and added to the Z Rotation."
      },
      {
        "type": "scalar",
        "label": "Random Y Rotation",
        "description": "A random value lesser than the specified value and added to the Y Rotation."
      },
      {
        "type": "scalar",
        "label": "Random X Rotation",
        "description": "A random value lesser than the specified value and added to the X Rotation."
      },
      {
        "type": "boolean",
        "label": "Terminate With Animation",
        "description": "Sets whether or not this graphic effect terminates when the animation ends."
      }
    ]
  },
  "111B1000": {
    "name": "Graphic Effect (Detached)",
    "description": "Generate a graphical effect. Stays at the spot it was spawned.",
    "parameters": [
      {
        "type": "value",
        "label": "Graphic",
        "description": "The file from which to call from/The graphical effect to call, where XXXXYYYY is X=File# Y=Graphic ID."
      },
      {
        "type": "value",
        "label": "Bone",
        "description": "The bone to attach the graphical effect to."
      },
      {
        "type": "scalar",
        "label": "Z Offset",
        "description": "Transition from the attached bone along the Z axis."
      },
      {
        "type": "scalar",
        "label": "Y Offset",
        "description": "Transition from the attached bone along the Y axis."
      },
      {
        "type": "scalar",
        "label": "X Offset",
        "description": "Transition from the attached bone along the X axis."
      },
      {
        "type": "scalar",
        "label": "Z Rotation",
        "description": "Rotation along the Z axis."
      },
      {
        "type": "scalar",
        "label": "Y Rotation",
        "description": "Rotation along the Y axis."
      },
      {
        "type": "scalar",
        "label": "X Rotation",
        "description": "Rotation along the X axis."
      },
      {
        "type": "scalar",
        "label": "Size",
        "description": "The size of the graphic."
      },
      {
        "type": "scalar",
        "label": "Random Z Offset",
        "description": "A random value lesser than the specified value and added to the Z Offset."
      },
      {
        "type": "scalar",
        "label": "Random Y Offset",
        "description": "A random value lesser than the specified value and added to the Y Offset."
      },
      {
        "type": "scalar",
        "label": "Random X Offset",
        "description": "A random value lesser than the specified value and added to the X Offset."
      },
      {
        "type": "scalar",
        "label": "Random Z Rotation",
        "description": "A random value lesser than the specified value and added to the Z Rotation."
      },
      {
        "type": "scalar",
        "label": "Random Y Rotation",
        "description": "A random value lesser than the specified value and added to the Y Rotation."
      },
      {
        "type": "scalar",
        "label": "Random X Rotation",
        "description": "A random value lesser than the specified value and added to the X Rotation."
      },
      {
        "type": "boolean",
        "label": "Terminate With Animation",
        "description": "Sets whether or not this graphic effect terminates when the animation ends."
      }
    ]
  },
  "111C1000": {
    "name": "Graphic Effect (Detached)",
    "description": "Generate a graphical effect. Stays at the spot it was spawned.",
    "parameters": [
      {
        "type": "value",
        "label": "Graphic",
        "description": "The file from which to call from/The graphical effect to call, where XXXXYYYY is X=File# Y=Graphic ID."
      },
      {
        "type": "value",
        "label": "Bone",
        "description": "The bone to attach the graphical effect to."
      },
      {
        "type": "scalar",
        "label": "Z Offset",
        "description": "Transition from the attached bone along the Z axis."
      },
      {
        "type": "scalar",
        "label": "Y Offset",
        "description": "Transition from the attached bone along the Y axis."
      },
      {
        "type": "scalar",
        "label": "X Offset",
        "description": "Transition from the attached bone along the X axis."
      },
      {
        "type": "scalar",
        "label": "Z Rotation",
        "description": "Rotation along the Z axis."
      },
      {
        "type": "scalar",
        "label": "Y Rotation",
        "description": "Rotation along the Y axis."
      },
      {
        "type": "scalar",
        "label": "X Rotation",
        "description": "Rotation along the X axis."
      },
      {
        "type": "scalar",
        "label": "Size",
        "description": "The size of the graphic."
      },
      {
        "type": "scalar",
        "label": "Random Z Offset",
        "description": "A random value lesser than the specified value and added to the Z Offset."
      },
      {
        "type": "scalar",
        "label": "Random Y Offset",
        "description": "A random value lesser than the specified value and added to the Y Offset."
      },
      {
        "type": "scalar",
        "label": "Random X Offset",
        "description": "A random value lesser than the specified value and added to the X Offset."
      },
      {
        "type": "scalar",
        "label": "Random Z Rotation",
        "description": "A random value lesser than the specified value and added to the Z Rotation."
      },
      {
        "type": "scalar",
        "label": "Random Y Rotation",
        "description": "A random value lesser than the specified value and added to the Y Rotation."
      },
      {
        "type": "scalar",
        "label": "Random X Rotation",
        "description": "A random value lesser than the specified value and added to the X Rotation."
      },
      {
        "type": "boolean",
        "label": "Terminate With Animation",
        "description": "Sets whether or not this graphic effect terminates when the animation ends."
      }
    ]
  },
  "111E0100": {
    "name": "Set Flashing Effect?",
    "description": "Start Flashing Effect.",
    "parameters": []
  },
  "111F0100": {
    "name": "End Flashing Effect?",
    "description": "End Flashing Effect.",
    "parameters": []
  },
  "14070A00": {
    "name": "Aesthetic Wind Effect",
    "description": "Moves nearby movable model parts (capes, hair, etc) with a wind specified by the parameters.",
    "parameters": [
      {
        "type": "value",
        "label": "Parameter 0",
        "description": "Unknown, usually 0."
      },
      {
        "type": "scalar",
        "label": "Parameter 1",
        "description": "Scalar, unknown."
      },
      {
        "type": "scalar",
        "label": "Strength",
        "description": "The power of the wind. (For example, setting this to 300 will cause foe to rise up high and fast)"
      },
      {
        "type": "scalar",
        "label": "Speed",
        "description": "The speed of the wind."
      },
      {
        "type": "scalar",
        "label": "Size?",
        "description": "Perhaps the size of the wind."
      },
      {
        "type": "scalar",
        "label": "Parameter 5",
        "description": "Unknown."
      },
      {
        "type": "scalar",
        "label": "Parameter 6",
        "description": "Scalar, unknown."
      },
      {
        "type": "scalar",
        "label": "Parameter 7",
        "description": "Scalar, uknown."
      },
      {
        "type": "scalar",
        "label": "Parameter 8",
        "description": "Scalar,unknown."
      },
      {
        "type": "value",
        "label": "Parameter 9",
        "description": "Hex ID."
      }
    ]
  },
  "120D0200": {
    "name": "Basic Variable Multiply",
    "description": "Multiply a basic value by the specified value.",
    "parameters": [
      {
        "type": "value",
        "label": "Value",
        "description": "The value to multiply the selected variable by."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The Basic type variable to be multiplied."
      }
    ]
  },
  "120E0200": {
    "name": "Basic Variable Divide",
    "description": "Divide a basic value by the specified value.",
    "parameters": [
      {
        "type": "value",
        "label": "Value",
        "description": "The value to divide the selected variable by."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The Basic type variable to be divided."
      }
    ]
  },
  "120F0200": {
    "name": "Float Variable Multiply",
    "description": "Multiply a specified value with a float variable.",
    "parameters": [
      {
        "type": "scalar",
        "label": "Value",
        "description": "The floating point value to multiply with the specified variable."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The Float type variable to access."
      }
    ]
  },
  "120A0100": {
    "name": "Bit Variable Set",
    "description": "Set a bit variable to true.",
    "parameters": [
      {
        "type": "variable",
        "label": "Variable",
        "description": "The Bit type variable to set."
      }
    ]
  },
  "120B0100": {
    "name": "Bit Variable Clear",
    "description": "Set a bit variable to false.",
    "parameters": [
      {
        "type": "variable",
        "label": "Variable",
        "description": "The Bit type variable to clear."
      }
    ]
  },
  "1A040500": {
    "name": "Camera Closeup",
    "description": "Zoom the camera on the character.",
    "parameters": [
      {
        "type": "value",
        "label": "Zoom Time",
        "description": "The time it takes to zoom in on the target."
      },
      {
        "type": "value",
        "label": "Undefined",
        "description": "No Description Available."
      },
      {
        "type": "scalar",
        "label": "Distance",
        "description": "No Description Available."
      },
      {
        "type": "scalar",
        "label": "X Rotation",
        "description": "No Description Available."
      },
      {
        "type": "scalar",
        "label": "Y Rotation",
        "description": "No Description Available."
      }
    ]
  },
  "1A080000": {
    "name": "Normal Camera",
    "description": "Return the camera to its normal settings.",
    "parameters": []
  },
  "1F000100": {
    "name": "Pickup Item",
    "description": "Cause the character to recieve the closest item in range.",
    "parameters": []
  },
  "1F000200": {
    "name": "Pickup Item",
    "description": "Cause the character to recieve the closest item in range.",
    "parameters": []
  },
  "1F010300": {
    "name": "Throw Item",
    "description": "Causes the character to throw the currently held item.",
    "parameters": [
      {
        "type": "variable",
        "label": "Direction",
        "description": "Usually an internal constant basic variable set at 1030."
      },
      {
        "type": "variable",
        "label": "Speed",
        "description": "Usually an internal constant basic variable set at 1029."
      },
      {
        "type": "variable",
        "label": "Type",
        "description": "Usually an internal constant basic variable set at 1031."
      }
    ]
  },
  "1F020000": {
    "name": "Drop Item",
    "description": "Cause the character to drop any currently held item.",
    "parameters": []
  },
  "1F030100": {
    "name": "Consume Item",
    "description": "Cause the character to consume the currently held item.",
    "parameters": []
  },
  "1F040200": {
    "name": "Item Property",
    "description": "Modify a property of the currently held item.",
    "parameters": [
      "value",
      "scalar"
    ]
  },
  "1F070100": {
    "name": "Rocket Operation",
    "description": "Undefined: Is used when firing a cracker launcher.",
    "parameters": [
      "variable"
    ]
  },
  "1F080100": {
    "name": "Generate Item",
    "description": "Generate an item in the character's hand.",
    "parameters": [
      {
        "type": "value",
        "label": "Item ID",
        "description": "Choose your Item."
      }
    ]
  },
  "1F0C0100": {
    "name": "Weapon Operation",
    "description": "Creates a beam sword trail. Probably has more uses among battering weapons.",
    "parameters": []
  },
  "1F0E0500": {
    "name": "Throw Item",
    "description": "Cause the character to throw the currently held item.",
    "parameters": [
      {
        "type": "scalar",
        "label": "X Offset",
        "description": "How far horizontally."
      },
      {
        "type": "scalar",
        "label": "Y Offset",
        "description": "How far vertical."
      },
      {
        "type": "variable",
        "label": "Direction",
        "description": "Usually an internal constant basic variable set at 1030."
      },
      {
        "type": "variable",
        "label": "Speed",
        "description": "Usually an internal constant basic variable set at 1029."
      },
      {
        "type": "variable",
        "label": "Type",
        "description": "Usually an internal constant basic variable set at 1031."
      }
    ]
  },
  "1F090100": {
    "name": "Item Visibility",
    "description": "Determines visibilty of the currently held item.",
    "parameters": [
      {
        "type": "boolean",
        "label": "Item Visibility",
        "description": "Set Boolean: True = Visible, False = Invisible"
      }
    ]
  },
  "1F050000": {
    "name": "Fire Weapon",
    "description": "Fires a shot from the currently held item. (May have other unknown applications)",
    "parameters": []
  },
  "1F060100": {
    "name": "Fire Projectile",
    "description": "Fires a projectile of the specified degree of power.",
    "parameters": []
  },
  "1A000100": {
    "name": "Screenshake",
    "description": "Shakes the screen.",
    "parameters": [
      {
        "type": "value",
        "label": "Size",
        "description": "The size of the screenshake."
      }
    ]
  },
  "0B020100": {
    "name": "Visibility",
    "description": "Shows whether you're visible or not.",
    "parameters": [
      {
        "type": "boolean",
        "label": "Visibility",
        "description": "Set Boolean: True = Visible, False = Invisible"
      }
    ]
  },
  "07070200": {
    "name": "Rumble",
    "description": "Controls the rumble on the controller.",
    "parameters": [
      {
        "type": "value",
        "label": "Size",
        "description": "The size of the rumble."
      },
      {
        "type": "unknown",
        "label": "Time",
        "description": "How long the rumble lasts. (Frames)"
      }
    ]
  },
  "0E080200": {
    "name": "Set Momentum",
    "description": "Controls the movement velocity of the object. (Note: Can't use variables as parameters.)",
    "parameters": [
      {
        "type": "scalar",
        "label": "Horizontal Velocity",
        "description": "The speed of the character moving left/right."
      },
      {
        "type": "scalar",
        "label": "Vertical Velocity",
        "description": "The speed of the character moving up/down."
      }
    ]
  },
  "0E080400": {
    "name": "Set/Add Momentum",
    "description": "Controls the movement velocity of a moving character (contains add/subtract parameters).",
    "parameters": [
      {
        "type": "scalar",
        "label": "Horizontal Velocity",
        "description": "The speed of the character moving left/right."
      },
      {
        "type": "scalar",
        "label": "Vertical Velocity",
        "description": "The speed of the character moving up/down."
      },
      {
        "type": "value",
        "label": "Set/Add Horizontal",
        "description": "0 = Add, 1 = Set"
      },
      {
        "type": "value",
        "label": "Set/Add Vertical",
        "description": "0 = Add, 1 = Set"
      }
    ]
  },
  "0E010200": {
    "name": "Add/Subtract Momentum",
    "description": "Adds or subtracts speed to the char's current momentum.",
    "parameters": [
      {
        "type": "scalar",
        "label": "Horizontal Velocity",
        "description": "The speed of the character moving left/right."
      },
      {
        "type": "scalar",
        "label": "Vertical Velocity",
        "description": "The speed of the character moving up/down."
      }
    ]
  },
  "0E060100": {
    "name": "Disallow Certain Movements",
    "description": "When set to 2, sideways movement is disallowed. When set to 1, disables vertical gravity. Note: Hitstun can often times enhance momentum in the disabled direction.",
    "parameters": []
  },
  "0E070100": {
    "name": "Reallow Certain Movements",
    "description": "This must be set to the same value as Disallow Certain Movements to work.",
    "parameters": []
  },
  "0E020100": {
    "name": "Prevent Vertical Movement",
    "description": "When set to 1, vertical speed and acceleration are reset back to 0.",
    "parameters": [
      null
    ]
  },
  "0E040100": {
    "name": "Prevent Horizontal Gravity",
    "description": "When set to 1, horizontal speed and decay rate are reset back to 0.",
    "parameters": []
  },
  "0C250100": {
    "name": "Tag Display",
    "description": "Disables or enables tag display for the current sub action.",
    "parameters": [
      {
        "type": "boolean",
        "label": "Tag On/Off",
        "description": "Set Boolean: True = On, False = Off"
      }
    ]
  },
  "1E000200": {
    "name": "Super/Heavy Armor",
    "description": "Begins super armor or heavy armor. Set both parameters to 0 to end the armor.",
    "parameters": [
      {
        "type": "value",
        "label": "Armor State",
        "description": "0 = None, 1 = Super Armor, 2 = Knockback Based Heavy Armor, 3 = Damage Based Heavy Armor, 4 = Subtractive Knockback Armor (Project M only)"
      },
      {
        "type": "scalar",
        "label": "Armor Tolerance",
        "description": "For heavy armor, the minimum damage that will cause the character to flinch when using heavy armor. For subtractive knockback armor, the amount subtracted from the knockback of the attacking move."
      }
    ]
  },
  "1E030100": {
    "name": "Add/Subtract Damage",
    "description": "Adds or subtracts the specified amount of damage from the character's current percentage.",
    "parameters": [
      {
        "type": "scalar",
        "label": "Recover/Damage",
        "description": "+ Values = Damage and - values = Recover."
      }
    ]
  },
  "06010200": {
    "name": "Change Hitbox Damage",
    "description": "Changes a specific hitbox's damage to the new amount. Only guaranteed to work on Offensive Collisions.",
    "parameters": [
      {
        "type": "value",
        "label": "Hitbox",
        "description": "ID of the hitbox to be changed."
      },
      {
        "type": "unknown",
        "label": "Damage",
        "description": "New damage of the hitbox."
      }
    ]
  },
  "06030100": {
    "name": "Delete Hitbox",
    "description": "Deletes a hitbox of the specified ID. Only guaranteed to work on Offensive Collisions.",
    "parameters": [
      {
        "type": "value",
        "label": "Hitbox",
        "description": "ID of the hitbox to be deleted."
      }
    ]
  },
  "0B000200": {
    "name": "Model Changer",
    "description": "Changes the character's model in certain preset ways defined in the Misc section. (Examples: sheathe sword, retreat into shell, etc.)",
    "parameters": [
      {
        "type": "value",
        "label": "BoneSwitch ID",
        "description": "The target switch for model changes. (Example: Link's sword is 1, his shield is 2)"
      },
      {
        "type": "unknown",
        "label": "BoneGroup ID",
        "description": "Typically, 0 changes to the normal state, 1 changes the location or shape, and 2 removes it entirely. (Example: Bowser is normal on 0, Bowser is in his shell on 1, and Bowser is invisible on 2)"
      }
    ]
  },
  "0B010200": {
    "name": "Model Display Toggle?",
    "description": "Changes what entries of Hidden and Visible bone indexes from Model Display are used in some fashion.",
    "parameters": [
      {
        "type": "value",
        "label": "BoneSwitch ID",
        "description": "The target switch for model changes. (Example: Link's sword is 1, his shield is 2)"
      },
      {
        "type": "unknown",
        "label": "BoneGroup ID",
        "description": "Typically, 0 changes to the normal state, 1 changes the location or shape, and 2 removes it entirely. (Example: Bowser is normal on 0, Bowser is in his shell on 1, and Bowser is invisible on 2)"
      }
    ]
  },
  "070B0200": {
    "name": "Rumble Loop",
    "description": "Creates a rumble loop on the controller.",
    "parameters": [
      {
        "type": "value",
        "label": "Parameter 0",
        "description": "Unknown, Usually 25."
      },
      {
        "type": "unknown",
        "label": "Parameter 1",
        "description": "Unknown, Usually 39."
      }
    ]
  },
  "00030000": {
    "name": "Flow 03",
    "description": "Undefined. in used Go to Loop.",
    "parameters": []
  },
  "02000400": {
    "name": "Change Action Status",
    "description": "Change the current action upon the specified requirement being met. (the requirement does not have to be met at the time this ID is executed - it can be used anytime after execution.)",
    "parameters": [
      "value",
      "value",
      "requirement",
      "variable"
    ]
  },
  "02000600": {
    "name": "Change Action Status",
    "description": "Change the current action upon the specified requirement being met. (the requirement does not have to be met at the time this ID is executed - it can be used anytime after execution.)",
    "parameters": [
      {
        "type": "value",
        "label": "Status ID",
        "description": "The four-digit status ID of the change action event. Can later be disabled via 02080100 (Disable Action Status ID)"
      },
      {
        "type": "value",
        "label": "Action",
        "description": "The ID of the action that the character will execute."
      },
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "The form of requirement used in evaluation of the event."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The variable applied to the requirement."
      },
      {
        "type": "value",
        "label": "Comparison",
        "description": "The first variable in the comparison requirement."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The method used to compare the two variables. From 0 to 5: <, <=, =, !=, >=, >"
      }
    ]
  },
  "02080100": {
    "name": "Disable Action Status ID",
    "description": "Disables the Action associated with the given Status ID.",
    "parameters": [
      {
        "type": "value",
        "label": "Status ID",
        "description": "The Status ID to disable. After this command, the associated Action will not activate."
      }
    ]
  },
  "02090200": {
    "name": "Invert Action Status ID",
    "description": "Appears to invert (or possibly only disable) a specific Status ID's enabled/disabled status. For example, if a character can crawl, this is used to disable the ability to dash when crouched, even though naturally crouching allows dashing through 020A (Allow Specific Interrupt).",
    "parameters": [
      {
        "type": "value",
        "label": "Interrupt ID?",
        "description": "Appears to be a Interrupt ID as used by 020A0100 (Allow Specific Interrupt)."
      },
      {
        "type": "unknown",
        "label": "Status ID?",
        "description": "Appears to be a Status ID."
      }
    ]
  },
  "020A0100": {
    "name": "Allow Specific Interrupt",
    "description": "Allows interruption only by specific commands. See parameters for list of possible interrupts.",
    "parameters": [
      {
        "type": "value",
        "label": "Command Type",
        "description": "Expand the window to view the full list.  List of types of commands: 1-Ground Special, 2-Ground Item, 3-Grab, 4-Ground Attack, 5-Ground Dodge, 6-Shield, 7-Ground Jump, 8-Ground (other), 9-Landing, A-Ledge Grab, B-Air Special, C-Air Item Throw, D-Air Grab, E-Air Dodge, F-Air Attack, 10-Footstool, 11-Wall Jump, 12-Air Jump, 13-Fall Through Plat(only works in squat)."
      }
    ]
  },
  "020B0100": {
    "name": "Prevent Specific Interrupt",
    "description": "Closes the specific interruption window. Must be set to the same thing as the allow specific interrupt that you wish to cancel.",
    "parameters": [
      {
        "type": "value",
        "label": "Interrupt ID",
        "description": "Expand the window to view the full list. List of types of commands: 1-Ground Special, 2-Ground Item, 3-Grab, 4-Ground Attack, 5-Ground Dodge, 6-Shield, 7-Ground Jump, 8-Ground (other), 9-Landing, A-Ledge Grab, B-Air Special, C-Air Item Throw, D-Air Grab, E-Air Dodge, F-Air Attack, 10-Footstool, 11-Wall Jump, 12-Air Jump, 13-Fall Through Plat(only works in squat)."
      }
    ]
  },
  "020C0100": {
    "name": "Clear Prevent Interrupt",
    "description": "Possibly unregisters a previously created interrupt.",
    "parameters": [
      {
        "type": "value",
        "label": "Interrupt ID",
        "description": "Possibly the Interrupt ID to unregister. 1-Ground Special, 2-Ground Item, 3-Grab, 4-Ground Attack, 5-Ground Dodge, 6-Shield, 7-Ground Jump, 8-Ground (other), 9-Landing, A-Ledge Grab, B-Air Special, C-Air Item Throw, D-Air Grab, E-Air Dodge, F-Air Attack, 10-Footstool, 11-Wall Jump, 12-Air Jump, 13-Fall Through Plat(only works in squat)."
      }
    ]
  },
  "04020100": {
    "name": "Set Loop Resume Requirement",
    "description": "Set requirement for reading \"Loop Rest\" or later.",
    "parameters": [
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "The form of requirement used in evaluation of the event."
      },
      {
        "type": "unknown",
        "label": "Variable",
        "description": "The variable applied to the requirement."
      },
      {
        "type": "unknown",
        "label": "Unknown",
        "description": "Unknown."
      }
    ]
  },
  "04020200": {
    "name": "Set Loop Resume Requirement",
    "description": "Set requirement for reading \"Loop Rest\" or later.",
    "parameters": [
      "requirement",
      "variable"
    ]
  },
  "04020400": {
    "name": "Set Loop Resume Requirement",
    "description": "Set requirement for reading \"Loop Rest\" or later.",
    "parameters": [
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "The form of requirement used in evaluation of the event."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The first variable in the comparison requirement."
      },
      {
        "type": "value",
        "label": "Comparison Method",
        "description": "The method used to compare the two variables. From 0 to 5: <, <=, =, !=, >=, >"
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The second variable in the comparison requirement."
      }
    ]
  },
  "04030100": {
    "name": "Additional Loop Resume Requirement",
    "description": "Add an additional requirement to Set Loop Resume Requirement.",
    "parameters": [
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "The form of requirement used in evaluation of the event."
      },
      {
        "type": "unknown",
        "label": "Variable",
        "description": "The variable applied to the requirement."
      },
      {
        "type": "unknown",
        "label": "Unknown",
        "description": "Unknown."
      }
    ]
  },
  "04030200": {
    "name": "Additional Loop Resume Requirement",
    "description": "Add an additional requirement to Set Loop Resume Requirement.",
    "parameters": [
      "requirement",
      "variable"
    ]
  },
  "04030400": {
    "name": "Additional Loop Resume Requirement",
    "description": "Add an additional requirement to Set Loop Resume Requirement.",
    "parameters": [
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "The form of requirement used in evaluation of the event."
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The first variable in the comparison requirement."
      },
      {
        "type": "value",
        "label": "Comparison Method",
        "description": "The method used to compare the two variables. From 0 to 5: <, <=, =, !=, >=, >"
      },
      {
        "type": "variable",
        "label": "Variable",
        "description": "The second variable in the comparison requirement."
      }
    ]
  },
  "04050100": {
    "name": "Additional Loop Resume Requirement",
    "description": "Used quite a bit in Meta Knight's special move actions, as well as Pit's Down-B.",
    "parameters": []
  },
  "04060100": {
    "name": "Set Animation Frame",
    "description": "Changes the current frame of the animation. Does not change the frame of the sub action (i.e. timers and such are unaffected).",
    "parameters": [
      {
        "type": "scalar",
        "label": "Frame",
        "description": "The frame to skip to."
      }
    ]
  },
  "04010200": {
    "name": "Set Loop Resume Requirement 01",
    "description": "Set requirement for reading \"Loop Rest\" or later.",
    "parameters": [
      {
        "type": "value",
        "label": "Value",
        "description": "Unknown."
      },
      {
        "type": "requirement",
        "label": "Requirement",
        "description": "The form of requirement used in evaluation of the event."
      }
    ]
  },
  "040A0100": {
    "name": "Sub Actions 0A",
    "description": "Unknown. Set Sub Action ID?",
    "parameters": []
  },
  "040B0100": {
    "name": "Sub Actions 0B",
    "description": "Unknown. Set Frame Speed?",
    "parameters": []
  },
  "040C0100": {
    "name": "Sub Actions 0C",
    "description": "Unknown.",
    "parameters": [
      {
        "type": "value",
        "label": "Sub Action",
        "description": "A sub action ID."
      }
    ]
  },
  "040D0100": {
    "name": "Sub Actions 0D",
    "description": "Unknown.",
    "parameters": []
  },
  "04140100": {
    "name": "Set Animation & Timer Frame",
    "description": "Changes the current frame of the animation and timers.",
    "parameters": [
      "scalar"
    ]
  },
  "04180100": {
    "name": "Sub Actions 18",
    "description": "Unknown.",
    "parameters": []
  },
  "05010000": {
    "name": "Posture 01",
    "description": "Undefined. Character Direction Related?",
    "parameters": []
  },
  "05020000": {
    "name": "Posture 02",
    "description": "Undefined. Character Direction Related?",
    "parameters": []
  },
  "05030000": {
    "name": "Posture 03",
    "description": "Undefined. Character Direction Related?",
    "parameters": []
  },
  "05040000": {
    "name": "Posture 04",
    "description": "Undefined. Character Direction Related?",
    "parameters": []
  },
  "05070300": {
    "name": "Posture 07",
    "description": "Unknown.",
    "parameters": []
  },
  "050D0100": {
    "name": "Posture 0D",
    "description": "Unknown.",
    "parameters": []
  },
  "06020200": {
    "name": "Change Hitbox Size",
    "description": "Changes a specific hitbox's size to the new amount. Only guaranteed to work on Offensive Collisions.",
    "parameters": [
      {
        "type": "value",
        "label": "Hitbox ID",
        "description": "ID of the hitbox to be changed."
      },
      {
        "type": "scalar",
        "label": "New Size",
        "description": "New size of the hitbox."
      }
    ]
  },
  "060C0100": {
    "name": "Delete Catch Collision",
    "description": "Deletes the catch collision with the specified ID.",
    "parameters": [
      {
        "type": "value",
        "label": "ID",
        "description": "ID of the collision to delete"
      }
    ]
  },
  "06101100": {
    "name": "Inert Collision",
    "description": "Generates an oblivious hitbox only used to detect collision with other characters/objects.",
    "parameters": [
      {
        "type": "value",
        "label": "Undefined",
        "description": "When messed with, seemed to affect the accuracy of the collision detection. Should be set to 0 to be safe."
      },
      {
        "type": "value",
        "label": "ID",
        "description": "The ID of the hitbox"
      },
      {
        "type": "value",
        "label": "Bone?",
        "description": "Possibly the bone that the hitbubble is attached to."
      },
      {
        "type": "scalar",
        "label": "Size",
        "description": "The size of the hitbubble."
      },
      {
        "type": "scalar",
        "label": "X Offset",
        "description": "Transition relative to the currently attached bone."
      },
      {
        "type": "scalar",
        "label": "Y Offset",
        "description": "Transition relative to the currently attached bone."
      },
      {
        "type": "scalar",
        "label": "Z Offset",
        "description": "Transition relative to the currently attached bone."
      },
      {
        "type": "value",
        "label": "Flags",
        "description": "+02 = Hits Normally, +04=Can be reflected...."
      },
      {
        "type": "value",
        "label": "Undefined",
        "description": "Undefined."
      },
      {
        "type": "value",
        "label": "Air/Ground",
        "description": "1 = only hits grounded foes, 2 = only hits aerial foes, 3 = hits aerial and grounded foes."
      },
      {
        "type": "boolean",
        "label": "Undefined",
        "description": "Undefined."
      },
      {
        "type": "value",
        "label": "Undefined",
        "description": "Undefined."
      },
      {
        "type": "value",
        "label": "Undefined",
        "description": "Undefined."
      },
      {
        "type": "boolean",
        "label": "Undefined",
        "description": "Undefined."
      },
      {
        "type": "value",
        "label": "Rehit Rate?",
        "description": "The rehit rate of the hitbubble?"
      },
      {
        "type": "boolean",
        "label": "Affects Self?",
        "description": "Possibly if the uninteractive collision affects the host character."
      },
      {
        "type": "value",
        "label": "Undefined",
        "description": "Undefined."
      }
    ]
  },
  "06140200": {
    "name": "Add Hitbox Damage",
    "description": "Add a specific hitbox's damage.",
    "parameters": [
      {
        "type": "value",
        "label": "Hitbox ID",
        "description": "ID of the hitbox to be changed."
      },
      {
        "type": "unknown",
        "label": "Damage",
        "description": "Add damage of the hitbox."
      }
    ]
  },
  "062C0F00": {
    "name": "Special Collateral Collision",
    "description": "Used for the \"bump\" collisions that occur when a character in knockback collides with another body.",
    "parameters": [
      {
        "type": "value",
        "label": "Bone/ID?",
        "description": "The bone the collision bubble is attached to / the ID number of the collision bubble; XXXXYYYY where X=Bone, Y=ID."
      },
      {
        "type": "value",
        "label": "Damage",
        "description": "The amount of damage inflicted to the target upon collision."
      },
      {
        "type": "value",
        "label": "Trajectory",
        "description": "The direction in which a target gets launched."
      },
      {
        "type": "value",
        "label": "WDSK/KBG?",
        "description": "(full info can be read at tinyurl.com/HitboxParam) The distance the target is launched proportional to weight for fixed knockback hits/The additional distance the target is launched proportional to its damage (launch force for fixed knockback hits). XXXXYYYY is X=Weight Knockback, Y=Knockback Growth."
      },
      {
        "type": "value",
        "label": "(full info can be read at tinyurl.com/HitboxParam) Shield Damage/BKB?",
        "description": "The amount of damage dealt to the target's shield if it is up/The distance the target is launched regardless of its damage (zero for fixed knockback hits). XXXXYYYY is X=Shield Damage, Y=Base Knockback."
      },
      {
        "type": "scalar",
        "label": "Size?",
        "description": "The size of the collision bubble."
      },
      {
        "type": "scalar",
        "label": "X Offset?",
        "description": "The amount the collision bubble is transitioned relative to the currently attached bone."
      },
      {
        "type": "scalar",
        "label": "Y Offset?",
        "description": "The amount the collision bubble is transitioned relative to the currently attached bone."
      },
      {
        "type": "scalar",
        "label": "Z Offset?",
        "description": "The amount the collision bubble is transitioned relative to the currently attached bone."
      },
      {
        "type": "scalar",
        "label": "Tripping Rate?",
        "description": "The percent possibility of the collision bubble inducing a trip, provided the target doesn't leave the ground from the knockback. (1 = 100%)"
      },
      {
        "type": "scalar",
        "label": "Hitlag Multiplier?",
        "description": "A multiplier affecting the time in which both parties pause when the collision bubble connects."
      },
      {
        "type": "scalar",
        "label": "SDI Multiplier?",
        "description": "Smash Directional Influence Multiplier; affects the ability for the character maneuver themselves a small amount while in hitlag by this collision bubble."
      },
      {
        "type": "value",
        "label": "Flags 1",
        "description": "Flags for various parameters such as hit effects and sound effects. These might help: tinyurl.com/HitboxFlagParser http://tinyurl.com/HitboxFlagInfo"
      },
      {
        "type": "value",
        "label": "Undefined",
        "description": "Undefined."
      },
      {
        "type": "value",
        "label": "Flags 2",
        "description": "Flags for various parameters such as hit effects and sound effects. These might help: tinyurl.com/HitboxFlagParser http://tinyurl.com/HitboxFlagInfo"
      }
    ]
  },
  "062D0000": {
    "name": "Collisions 2D",
    "description": "Undefined. Offensive Collision related?",
    "parameters": []
  },
  "07000000": {
    "name": "Clear Buffer?",
    "description": "Possibly clears the controller buffer.",
    "parameters": []
  },
  "07010000": {
    "name": "Controller 01",
    "description": "Undefined.",
    "parameters": []
  },
  "07020000": {
    "name": "Controller 02",
    "description": "Undefined.",
    "parameters": []
  },
  "07060100": {
    "name": "Controller 06",
    "description": "Undefined.",
    "parameters": [
      "boolean"
    ]
  },
  "070C0000": {
    "name": "Controller 0C",
    "description": "Undefined.",
    "parameters": []
  },
  "08010100": {
    "name": "Edge Interaction 01",
    "description": "unknown.",
    "parameters": []
  },
  "08020100": {
    "name": "Edge Interaction 02",
    "description": "unknown.",
    "parameters": [
      {
        "type": "value",
        "label": "Character State?",
        "description": "Appears to use similar values to \"Set Aerial/Onstage State\"."
      }
    ]
  },
  "08040100": {
    "name": "Edge Interaction 04",
    "description": "unknown.",
    "parameters": [
      "boolean"
    ]
  },
  "08070000": {
    "name": "Edge Interaction 07",
    "description": "Undefined.",
    "parameters": []
  },
  "09000100": {
    "name": "Module09 00",
    "description": "Air/ground related. In the air, it's set to 2, and the edge to 5. On the ground, it's almost always 0. Setting this to any setting other than 2 while in the air will replenish jumps and recovery moves.",
    "parameters": []
  },
  "0C010000": {
    "name": "Character Specific 01",
    "description": "Undefined.",
    "parameters": []
  },
  "0C040000": {
    "name": "Character Specific 04",
    "description": "Undefined.",
    "parameters": []
  },
  "0C060000": {
    "name": "Enter Final Smash State",
    "description": "Allows use of Final Smash locked articles, variables, etc. Highly unstable.",
    "parameters": []
  },
  "0C070000": {
    "name": "Exit Final Smash State",
    "description": "Undefined.",
    "parameters": []
  },
  "0C080000": {
    "name": "Terminate Self",
    "description": "Used by certain article instances to remove themselves.",
    "parameters": []
  },
  "0C090100": {
    "name": "Allow/Disallow Ledgegrab",
    "description": "Allow or disallow grabbing ledges during the current sub action.",
    "parameters": [
      {
        "type": "value",
        "label": "Allow/Disallow",
        "description": "0=cannot, 1=Only in front, 2=Always"
      }
    ]
  },
  "0C0A0100": {
    "name": "Character Specific 0A",
    "description": "Unknown.",
    "parameters": []
  },
  "0C130000": {
    "name": "Character Specific 13",
    "description": "Undefined.",
    "parameters": []
  },
  "0C140200": {
    "name": "Set Static Article?",
    "description": "Used in victories.",
    "parameters": []
  },
  "0C150100": {
    "name": "Remove Static Article",
    "description": "Used in victories.",
    "parameters": []
  },
  "0C160000": {
    "name": "Character Specific 16",
    "description": "Undefined.",
    "parameters": []
  },
  "0C170100": {
    "name": "Character Specific 17",
    "description": "Undefined. Often appears before 0C25 (Tag Display)",
    "parameters": [
      "boolean"
    ]
  },
  "0C170200": {
    "name": "Character Specific 17 Variable",
    "description": "Undefined. Often appears before 0C25 (Tag Display)",
    "parameters": [
      "boolean",
      "variable"
    ]
  },
  "0C1A0200": {
    "name": "Character Specific 1A",
    "description": "Unknown. Used attacks with the Star Rod or Lip Stick",
    "parameters": []
  },
  "0C1B0100": {
    "name": "Character Specific 1B",
    "description": "Unknown.",
    "parameters": [
      "variable"
    ]
  },
  "0C1C0200": {
    "name": "Character Specific 1C",
    "description": "Used in Fighter.pac to do something based on which throw is in progress.",
    "parameters": []
  },
  "0C1C0300": {
    "name": "Character Specific 1C Boolean",
    "description": "Unknown.",
    "parameters": [
      "value",
      "value",
      "boolean"
    ]
  },
  "0C1F0000": {
    "name": "Eating Voice Clip",
    "description": "Play a random voice clip from the selection of eating voice clips.",
    "parameters": []
  },
  "0C200200": {
    "name": "Character Specific 20",
    "description": "Unknown.",
    "parameters": [
      "value",
      "boolean"
    ]
  },
  "0C240100": {
    "name": "Character Specific 24",
    "description": "Unknown.",
    "parameters": [
      "boolean"
    ]
  },
  "0C260100": {
    "name": "Character Specific 26",
    "description": "Unknown.",
    "parameters": [
      "boolean"
    ]
  },
  "0C270000": {
    "name": "Character Specific 27",
    "description": "Undefined. Often appears within Switch statements.",
    "parameters": []
  },
  "0C290000": {
    "name": "Character Specific 29",
    "description": "Undefined.",
    "parameters": []
  },
  "0C2B0000": {
    "name": "Character Specific 2B",
    "description": "Undefined.",
    "parameters": []
  },
  "0D000200": {
    "name": "Concurrent Infinite Loop",
    "description": "Runs a subroutine once per frame for the current action.",
    "parameters": [
      {
        "type": "value",
        "label": "Thread ID?",
        "description": "The event stack to run the subroutine (use 4, 6, or 9 or you risk crashes)"
      },
      {
        "type": "pointer",
        "label": "Offset",
        "description": "The subroutine location that contains the events that you would like to loop infinitely."
      }
    ]
  },
  "0D010100": {
    "name": "Terminate Concurrent Infinite Loop",
    "description": "Seems to stop the execution of a loop created with 0D000200 (Concurrent Infinite Loop).",
    "parameters": [
      {
        "type": "value",
        "label": "Thread ID?",
        "description": "The event stack to run the subroutine (use 4, 6, or 9 or you risk crashes)"
      }
    ]
  },
  "0F030200": {
    "name": "Link 03",
    "description": "unknown.",
    "parameters": []
  },
  "1A030400": {
    "name": "Set Camera Boundaries",
    "description": "Changes the camera boundaries of your character. Does not reset the camera boundaries; rather, it adds to them. Reverts to normal when the animation ends.",
    "parameters": [
      {
        "type": "scalar",
        "label": "Front Boundary",
        "description": "The boundary in front of the character."
      },
      {
        "type": "scalar",
        "label": "Back Boundary",
        "description": "The boundary behind the character."
      },
      {
        "type": "scalar",
        "label": "Top Boundary",
        "description": "The boundary above the character."
      },
      {
        "type": "scalar",
        "label": "Bottom Boundary",
        "description": "The boundary below the character."
      }
    ]
  },
  "1A060100": {
    "name": "Detach/Attach Camera (Close)",
    "description": "Causes the camera to follow or stop following a character.",
    "parameters": [
      {
        "type": "value",
        "label": "Detached/Attached",
        "description": "False=detached, true=attached."
      }
    ]
  },
  "1A070100": {
    "name": "Detach/Attach Camera (Far)",
    "description": "Causes the camera to follow or stop following a character. Seems to follow any remaining focuses from further away than 1A060100 (Detach/Attach Camera (Close))",
    "parameters": [
      {
        "type": "boolean",
        "label": "Detached/Attached",
        "description": "False=deviate, true=normal."
      }
    ]
  },
  "1A090000": {
    "name": "Camera 09",
    "description": "Undefined.",
    "parameters": []
  },
  "1A0B0000": {
    "name": "Force Camera Control",
    "description": "Appears to override any other settings in favor of the character's preference.",
    "parameters": []
  },
  "1A0C0000": {
    "name": "Camera 0C",
    "description": "Undefined.",
    "parameters": []
  },
  "1F0A0000": {
    "name": "Obliterate Held Item",
    "description": "Deletes the item that the character is holding.",
    "parameters": []
  },
  "020D0100": {
    "name": "Change Reading Action",
    "description": "Only used in Action Pre. Change the Action ID to be read.",
    "parameters": []
  },
  "111D0100": {
    "name": "Effect ID",
    "description": "Undefined.",
    "parameters": []
  },
  "1F110100": {
    "name": "Item-11",
    "description": "Undefined.",
    "parameters": []
  },
  "1F0F0100": {
    "name": "Morph Model Event",
    "description": "If false model will appear else if true model will disappear.",
    "parameters": [
      {
        "type": "value",
        "label": "True or False",
        "description": "If set to false, model will appear, else disapper."
      }
    ]
  },
  "01000000": {
    "name": "Go to Loop Rest 01",
    "description": "Use it when looping using Goto.Usually it is used with \"Go to Loop Rest 02\".",
    "parameters": []
  },
  "01020000": {
    "name": "Go to Loop Rest 02",
    "description": "Use it when looping using Goto.Usually it is used with \"Go to Loop Rest 01\".",
    "parameters": []
  },
  "0E0B0200": {
    "name": "Graphic Model Specf",
    "description": "Appears to control posture graphics.",
    "parameters": [
      {
        "type": "value",
        "label": "Bone and graphic number",
        "description": "Bone ID and external graphic number to call."
      },
      {
        "type": "unknown",
        "label": "True or False",
        "description": "Undefined."
      }
    ]
  },
  "0D070200": {
    "name": "Set Thread Type (Custom)",
    "description": "Sets a new thread type. (Requires the Independent Subroutines code by Mawootad.)",
    "parameters": [
      {
        "type": "value",
        "label": "Thread ID",
        "description": "0x7 and 0x8 are free for all fighters. 0x5 or 0x6 MAY be safe. 0xA is the default independent subroutine thread. 0x1-0x4 are the Main, GFX, SFX, and Other sections respectively, 0x9 is the default concurrent infinite loop thread."
      },
      {
        "type": "unknown",
        "label": "Thread Type",
        "description": "0x4=Concurrent Infinite Loop, 0x10=Independent Subroutine (ignored FSMs, no termination after sub/action change)"
      }
    ]
  },
  "0D050200": {
    "name": "Independent Subroutine (Custom)",
    "description": "Makes and starts a new independent subroutine. (Requires the Independent Subroutines code by Mawootad.)",
    "parameters": [
      {
        "type": "value",
        "label": "Thread ID",
        "description": "ID of the thread to be registered."
      },
      {
        "type": "pointer",
        "label": "Offset",
        "description": "Location of the subroutine code to be ran."
      }
    ]
  },
  "0D060100": {
    "name": "Terminate Independent Subroutine (Custom)",
    "description": "Stops a running independent subroutine. (Requires the relevant code by Mawootad.)",
    "parameters": [
      {
        "type": "pointer",
        "label": "Thread ID",
        "description": "ID of the thread to be terminated."
      }
    ]
  },
  "C0DE0100": {
    "name": "Change Hitbox Sound Effect (Custom)",
    "description": "Change the sound effect of the next hitbox. Requires the Hitbox Sound Effect Change System code by JOJI.",
    "parameters": [
      {
        "type": "value",
        "label": "Sound Effect",
        "description": "The ID number for the sound effect called."
      }
    ]
  }
}

const dummy = {
  "10000100": {
    "name": "Generate Article",
    "description": "Generate a pre-made prop effect from the prop library.",
    "parameters": [
      {
        "type": "value",
        "label": "Article ID",
        "description": "The ID of the prop article to be called."
      }
    ]
  }
}


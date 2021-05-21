window.IC_SAMPLE_SETUP = {
  "title": "Webapp title",
  "favicon": "FAVICON_URL",
  "styling": {
    "look": {
      "shadow": true,
      "rounded": true
    },
    "colorPalette": {
      "primaryColors": [
        "#3e76df"
      ],
      "complementary": {
        "white": "#FEFEFE",
        "black": "#222222",
        "light": "#F6F7FE",
        "dark": "#333333"
      }
    },
    "fonts": {
      "titles": "\"Quicksand\", sans-serif",
      "default": "\"Poppins\", sans-serif"
    }
  },
  "static": {
    "logo": {
      "url": "https://ic-core-assets.s3.us-east-2.amazonaws.com/ic-webapps/landing/ic/images/ic-logo-darkgrey.png",
      "heightScale": 3,
    },
    "titlePosition": "left"
  },
  "states": [
    {
      "key": "login",
      "params": {
        "stores": [],
        "content": {

          "itemsGroups": [
            {
              "name": "Test",
              "items": []
            },
            {
              "name": "Projects",
              "items": [
                {
                  "title": "Title",
                  "description": "Description",
                  "|#|action": {
                    "fnKey": "consoleLog",
                    "params": {
                      "asd": 123
                    }
                  }
                },
                {
                  "title": "Title",
                  "subtitle": "Subtitle",
                  "description": "Description",
                  "|#|action": {
                    "fnKey": "consoleLog",
                    "params": {
                      "asd": 123
                    }
                  }
                }
              ]
            },
            {
              "name": "Projects",
              "items": [
                {
                  "title": "Title",
                  "description": "Description",
                  "|#|action": {
                    "fnKey": "consoleLog",
                    "params": {
                      "asd": 123
                    }
                  }
                },
                {
                  "title": "Title",
                  "subtitle": "Subtitle",
                  "description": "Description",
                  "|#|action": {
                    "fnKey": "consoleLog",
                    "params": {
                      "asd": 123
                    }
                  }
                }
              ]
            }
          ],

          "buttons": [
            {
              "label": "Forgot password? Click here",
              "position": "left",
              "|#|action": {
                "fnKey": "goToState",
                "params": {
                  "stateName": "register"
                }
              }
            },
            {
              "label": "Login",
              "type": "main",
              "position": "center",
              "highlighted": true,
              "|#|action": {
                "fnKey": "consoleLog",
                "params": {
                  "|&|formParm": "&.stateStores.formValues"
                }
              }
            },
            {
              "label": "Create an account",
              "position": "center",
              "|#|action": {
                "fnKey": "goToState",
                "params": {
                  "stateName": "register"
                }
              }
            }
          ]
          
        
        }
      }
    },
    {
      "key": "register",
      "params": {
        "stores": [],
        "content": {

          "title": "Register",
          "itemsGroups": [
            {
              "name": "Projects",
              "items": [
                {
                  "title": "Title",
                  "description": "Description",
                  "|#|action": {
                    "fnKey": "consoleLog",
                    "params": {
                      "asd": 123
                    }
                  }
                }
              ]
            }
          ],
          "buttons": [
            {
              "label": "Register",
              "type": "main",
              "position": "center",
              "highlighted": true,
              "|#|action": {
                "fnKey": "consoleLog",
                "params": {
                  "|&|formParm": "&.stateStores.formValues"
                }
              }
            },
            {
              "label": "Login to account",
              "position": "center",
              "|#|action": {
                "fnKey": "goToState",
                "params": {
                  "stateName": "login"
                }
              }
            }
          ]
          
        
        }
      }
    }
  ]
}
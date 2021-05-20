import React, { Fragment, useContext } from 'react';
import ReactDOM from 'react-dom';
import { ICSetupProvider, icSetupContext } from './contexts/ICSetup';
import { StylingProvider, stylingContext } from './contexts/Styling';

const App = () => {
  const { staticSetup, dynamicSetup, executeRAWFunction } = useContext(icSetupContext);
  const stylingSetup = useContext(stylingContext);
  return (
    <Fragment>
          
      {!!staticSetup && (
        <div style={{ 
          position: 'absolute', 
          left: 0, 
          top: 0, 
          width: '100%', 
          height: '100%', 
          background: stylingSetup.layout.bgContainers.colors.background,
          overflow: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

          <div style={{ 
            borderRadius: stylingSetup.look.rounded ? 15 : 0,
            width: '90%',
            maxWidth: '30rem',
            background: stylingSetup.layout.fgContainers.colors.background,
            color: stylingSetup.layout.fgContainers.colors.font,
            maxHeight: '95%',
            overflow: 'auto',
            fontFamily: stylingSetup.defaults.fontFamily,
            WebkitBoxShadow: stylingSetup.look.shadow ? '0 2.5rem 3.125rem rgba(103, 118, 128, 0.1)': 'none',
            MozBoxShadow: stylingSetup.look.shadow ? '0 2.5rem 3.125rem rgba(103, 118, 128, 0.1)': 'none',
            boxShadow: stylingSetup.look.shadow ? '0 2.5rem 3.125rem rgba(103, 118, 128, 0.1)': 'none',
          }}>

            {/* Setup Loaded */}
            {!!dynamicSetup && (
              <div style={{ padding: stylingSetup.layout.mainContainer.padding }}>

                {/* Logo */}
                {!!staticSetup.content.logo && (
                  <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <img style={{ maxWidth: '80%', maxHeight: (staticSetup.content.logo.heightScale || 3)+'rem' }} src={staticSetup.content.logo.url} />
                  </div>
                )}

                {/* Inputs container */}
                <div style={{ marginBottom: 25 }}>

                  {dynamicSetup.content.itemsGroups.map((itmGroup, idx) => {
                    return (
                      <div key={idx} style={{ marginBottom: '1.5rem' }}>
                        <p style={{ marginBottom: '0.8rem', color: stylingSetup.layout.bgContainers.colors.font, opacity: 0.6, fontSize: '1rem' }}>{ itmGroup.name }</p>
                        {itmGroup.items.map((itm, idx2) => {
                          return (
                            <div onClick={() => {
                              executeRAWFunction(itm.action);
                            }} key={idx2} className='feedback-on-hover' style={{ 
                              padding: 15, 
                              boxShadow: stylingSetup.look.shadow ? '0px 0px 10px rgba(0, 0, 0, 0.05)' : 'none',
                              border: stylingSetup.look.shadow ? 'none' : '1px solid rgba(0, 0, 0, 0.05)',
                              cursor: 'pointer', 
                              marginBottom: '0.9em', 
                              borderRadius: stylingSetup.look.rounded ? 7 : 0 
                            }}>
                              {!!itm.title && (
                                <p style={{ fontSize: '1.2rem', color: stylingSetup.layout.bgContainers.colors.font, }}>{ itm.title }</p>
                              )}
                              {!!itm.subtitle && (
                                <p style={{ fontSize: '0.8rem', color: stylingSetup.layout.buttons.colors.font }}>{ itm.subtitle }</p>
                              )}
                              {!!itm.description && (
                                <p style={{ fontSize: '0.9rem', color: stylingSetup.layout.bgContainers.colors.font, opacity: 0.8 }}>{ itm.description }</p>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    )
                  })}

                </div>
                
                {/* Buttons container */}
                <div>

                  {/* Button */}
                  {dynamicSetup.content.buttons.map((btn, idx) => (
                    <div key={idx} style={{ textAlign: btn.position || 'left', marginBottom: 10 }}>
                      <button style={(
                        btn.highlighted ?
                        { 
                          padding: '0.9375rem 2rem 0.875rem', 
                          fontSize: '1rem', 
                          background: stylingSetup.layout.buttons.highlightedColors.background, 
                          color: stylingSetup.layout.buttons.highlightedColors.font, 
                          border: 'none', 
                          cursor: 'pointer',
                          borderRadius: stylingSetup.look.rounded ? 20 : 0 
                        } : { 
                          padding: '7px 0px', 
                          fontSize: '1rem', 
                          background: stylingSetup.layout.buttons.colors.background, 
                          color: stylingSetup.layout.buttons.colors.font, 
                          border: 'none',
                          cursor: 'pointer',
                        }
                      )} onClick={() => {
                        executeRAWFunction(btn.action);
                      }}>{ btn.label }</button>
                    </div>
                  ))}

                </div>

              </div>
            )}


          </div>

        </div>
      )}
    </Fragment>
  )
}

ReactDOM.render(
  <ICSetupProvider>
    <StylingProvider>
      <App />
    </StylingProvider>
  </ICSetupProvider>,
  document.getElementById('root')
);

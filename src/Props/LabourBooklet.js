import React, { Component } from 'react';
import Booklet from 'booklet-react-component';
import { Document } from 'react-pdf'

class LabourBooklet extends Component {
    constructor() {
        super();
        this.state = {
            index: 1,
            flipPageIndex: 1,
        };
    }
    genNextPages = () => {
        this.setState({
            index: this.state.index + 2,
        });
    };
    genPrevPages = () => {
        this.setState({
            index: this.state.index - 2,
        });
    };
    flipPageIndexForward = () => {
        this.setState({
            flipPageIndex: this.state.flipPageIndex + 1,
        });
    };
    flipPageIndexBack = () => {
        this.setState({
            flipPageIndex: this.state.flipPageIndex - 1,
        });
    };
    render() {
        return (
            <div className='book' style={{
                height: '2500rem',
                width: '37rem',
                perspective: '70rem'
            }}>
                <button>Class</button>
                <Booklet 
            
                    flipPageIndex={this.state.flipPageIndex}
                    index={this.state.index}
                    nextPage={this.genNextPages}
                    prevPage={this.genPrevPages}
                    pages={[
                        <div> 
                        <h1>ACT</h1>
To give effect to the right to fair labour practices referred to in section 23(1) of the
Constitution by establishing and making provision for the regulation of basic
conditions of employment; and thereby to comply with the obligations of the
Republic as a member state of the International Labour Organisation; and to
provide for matters connected therewith.
BE IT ENACTED by the Parliament of the Republic of South Africa as
follows:—
TABLE OF CONTENTS
CHAPTER ONE
Definitions, purpose and application of this Act
1. Definitions
2. Purpose of this Act
3. Application of this Act
4. Inclusion of provisions in contracts of employment
5. This Act not affected by agreements
CHAPTER TWO
Regulation of working time
6. Application of this Chapter
7. Regulation of working time
8. Interpretation of day
9. Ordinary hours of work
10. Overtime
11. Compressed working week
12. Averaging of hours of work
13. Determination of hours of work by Minister
14. Meal intervals
15. Daily and weekly rest period
16. Pay for work on Sundays
17. Night work
18. Public holidays
CHAPTER THREE
Leave
19. Application of this Chapter
20. Annual leave
21. Pay for annual leave
22. Sick leave
                        </div>,
                        <div> 
                        ACT
                        To give effect to the right to fair labour practices referred to in section 23(1) of the
                        Constitution by establishing and making provision for the regulation of basic
                        conditions of employment; and thereby to comply with the obligations of the
                        Republic as a member state of the International Labour Organisation; and to
                        provide for matters connected therewith.
                        BE IT ENACTED by the Parliament of the Republic of South Africa as
                        follows:—
                        TABLE OF CONTENTS
                        CHAPTER ONE
                        Definitions, purpose and application of this Act
                        1. Definitions
                        2. Purpose of this Act
                        3. Application of this Act
                        4. Inclusion of provisions in contracts of employment
                        5. This Act not affected by agreements
                        CHAPTER TWO
                        Regulation of working time
                        6. Application of this Chapter
                        7. Regulation of working time
                        8. Interpretation of day
                        9. Ordinary hours of work
                        10. Overtime
                        11. Compressed working week
                        12. Averaging of hours of work
                        13. Determination of hours of work by Minister
                        14. Meal intervals
                        15. Daily and weekly rest period
                        16. Pay for work on Sundays
                        17. Night work
                        18. Public holidays
                        CHAPTER THREE
                        Leave
                        19. Application of this Chapter
                        20. Annual leave
                        21. Pay for annual leave
                        22. Sick leave
                        </div>,
                        <div> Ele 2</div>,
                        <div> Ele 3</div>,
                        <div> Ele 4</div>,
                        <div> Ele 5</div>,
                        <div> Ele 6</div>,
                    ]}
                />

                <div className="button-container" style={{ position: 'absolute' }}>
                    <button onClick={this.flipPageIndexForward}>Next Pages</button>
                    <button onClick={this.flipPageIndexBack}>Prev Pages</button>
                </div>
            </div>
        );
    }
}

export default LabourBooklet;
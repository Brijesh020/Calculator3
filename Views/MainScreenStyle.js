module.exports = {
    main_screen: {
        marginTop: 80,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#040404',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    // Display results
    main_screen__display: {
        elevation: 10,
        width: '95%',
        // height: '25%',
        backgroundColor: '#040404',
        borderRadius: 10,
        display: 'flex',

        // alignItems: 'flex-end',
        // justifyContent: 'flex-end',
        marginBottom: 5,
        padding: 5,
    },
    main_screen__display_text: {
        fontSize: 40,
        color:"#e2dbdb",
        backgroundColor:"#040404",
        textAlign: 'right',
    },

    main_screen__keypad: {
        width: '100%',
        height: '56%',
        // backgroundColor: '#FF5757',
        display: 'flex',
        // justifyContent: 'center',
    },
    main_screen__keypad_row: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#040404',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    btn_outer: {
        width: 70,
        height: 70,
        backgroundColor: '#242424',
        borderRadius: 90,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg_button: {
        backgroundColor: '#242424',
        color: '#e2dbdb',
        fontSize: 25,
    },


    btn1_outer: {
        width: 70,
        height: 70,
        backgroundColor: '#242424',
        borderRadius: 90,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg1_button: {
        backgroundColor: '#242424',
        color: '#FF5757',
        fontSize: 25,
        fontWeight: 'bold',
    },


    btn2_outer: {
        width: 70,
        height: 70,

        backgroundColor: '#242424',
        borderRadius: 90,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg2_button: {
        backgroundColor: '#242424',
        color: '#26ba7c',
        fontSize: 25,
        fontWeight: 'bold',
    }, 
    btn3_outer: {
        width: 70,
        height: 70,

        backgroundColor: '#26ba7c',
        borderRadius: 90,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg3_button: {
        backgroundColor: '#26ba7c',
        color: '#040404',
        fontSize: 25,
        fontWeight: 'bold',
    },
}
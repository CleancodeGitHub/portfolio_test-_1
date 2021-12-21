$("#demo01").animatedModal();

//demo 02
$("#demo02").animatedModal({
    animatedIn: "lightSpeedIn",
    animatedOut: "bounceOutDown",
    color: "#3498db",
    // Callbacks
    beforeOpen: function () {
        console.log("The animation was called");
    },
    afterOpen: function () {
        console.log("The animation is completed");
    },
    beforeClose: function () {
        console.log("The animation was called");
    },
    afterClose: function () {
        console.log("The animation is completed");
    },
});
$("#demo03").animatedModal();
$("#demo04").animatedModal({
    animatedIn: "lightSpeedIn",
    animatedOut: "bounceOutDown",
    color: "#3498db",
    // Callbacks
    beforeOpen: function () {
        console.log("The animation was called");
    },
    afterOpen: function () {
        console.log("The animation is completed");
    },
    beforeClose: function () {
        console.log("The animation was called");
    },
    afterClose: function () {
        console.log("The animation is completed");
    },
});
$("#demo05").animatedModal();
$("#demo06").animatedModal();
$("#demo07").animatedModal();

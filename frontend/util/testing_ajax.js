// frontend/util/testing_ajax
// - testing ajax functions for dev console

export const createUser = (username, password) => {
  $.ajax({
    url: "/api/users",
    type: "POST",
    data: {
      user: {
        username,
        password
      }
    },
    success: function() {
      console.log("Made a user!");
    },
    error: function(errMsg) {
      console.log(errMsg);
    }
  });
}

export const login = (username, password) => {
  $.ajax({
    url: "/api/session",
    type: "POST",
    data: {
      user: {
        username,
        password
      }
    },
    success: function() {
      console.log("Logged In!");
    },
    error: function(errMsg) {
      console.log(errMsg);
    }
  });
}

export const logout = () => {
  $.ajax({
    url: "/api/session",
    type: "DELETE",
    success: function() {
      console.log("Logged out!");
    },
    error: function(errMsg) {
      console.log(errMsg);
    }
  });
}
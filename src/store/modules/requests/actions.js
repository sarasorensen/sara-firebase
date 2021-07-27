export default {
  async contactUs(context, payload) {
    const newRequest = {
      name: payload.name,
      userEmail: payload.email,
      message: payload.message,
    };

    const response = await fetch(
      ` https://sara-vue-default-rtdb.firebaseio.com/requests.json`,
      {
        method: "POST",
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    console.log(responseData);

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to send request."
      );
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.userId = payload.userId;

    context.commit("addRequest", newRequest);
  },
  async fetchRequests(context) {
    const userId = context.rootGetters.userId;
    const token = context.rootGetters.token;
    const response = await fetch(
      ` https://sara-vue-default-rtdb.firebaseio.com/requests.json?auth=` +
        token
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to fetch requests."
      );
      throw error;
    }

    const requests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        userId: userId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      requests.push(request);
    }

    context.commit("setRequests", requests);
  },
};

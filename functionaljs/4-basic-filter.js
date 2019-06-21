function getShortMessages(messages) {
      // SOLUTION GOES HERE
      const msg = messages.filter((m) => m.message.length < 50);
      const res = msg.map((m) => m.message);
      return res;
    }

    module.exports = getShortMessages

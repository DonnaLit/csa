import React from 'react'

var plivo = require('plivo');

(function main() {
    'use strict';
    var client = new plivo.Client("<auth_id>","<auth_token>");
    client.messages.create(
        "+14151234567",
        "+14157654321",
        "Half price clothing today at MB Sports. Offer closes at midnight sharp. No extension. Use code 50off at checkout. Mbsports.com To optout text abcd to 89022",
      ).then(function (response) {
        console.log(response);
      },);
    })();
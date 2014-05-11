/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        document.addEventListener('pause', app.onDevicePause, false);
        document.addEventListener('resume', app.onDeviceResume, false);
        var crap = window.localStorage.getItem("crappyStuff");
        if(crap) {
            $("#crapTextInput").val(crap);
            $("#display").text("");
            $("#display").text(crap);
        }
        
        $("#crapTextInput").on("keyup" , function (event) {
            $("#display").text("");
            $("#display").text(event.target.value);
        });
    },

    onDevicePause: function () {
        $("#display").text("");
        $("#display").text("Saved crap");
        window.localStorage.setItem("crappyStuff", $("#crapTextInput").val());
    },

    onDeviceResume: function () {
        var crap = window.localStorage.getItem("crappyStuff");
        if(crap) {
            $("#crapTextInput").val(crap);
            $("#display").text("");
            $("#display").text(crap);
        }
    }
    
};

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{9615:function(n,a,e){"use strict";e.r(a),a["default"]='<template>\n  <div class="q-pa-md">\n    <q-layout view="hHh Lpr fff" container style="height: 300px" class="shadow-2 rounded-borders">\n      <q-header elevated class="bg-black">\n        <q-toolbar>\n          <q-btn flat round dense icon="menu" @click="drawer = !drawer" />\n          <q-toolbar-title>Header</q-toolbar-title>\n        </q-toolbar>\n      </q-header>\n\n      <my-drawer v-model="drawer" elevated show-if-above :breakpoint="500" :width.sync="drawerWidth" :limits="[drawerLimits.min, drawerLimits.max]">\n        <div class="q-pa-lg">This is the Drawer</div>\n      </my-drawer>\n\n      <q-page-container>\n        <q-page class="q-pa-lg bg-grey-2">\n          <div class="row no-wrap">\n            <div class="q-mr-md">Width:</div>\n            {{ drawerWidth }}\n          </div>\n          <div class="row no-wrap q-pt-xl">\n            <div class="q-mr-md">Limits:</div>\n            <q-range label-always v-model="drawerLimits" :min="50" :max="600" />\n          </div>\n        </q-page>\n      </q-page-container>\n    </q-layout>\n  </div>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    drawer: false,\n    drawerWidth: 200,\n    drawerLimits: {\n      min: 100,\n      max: 300\n    }\n  })\n}\n<\/script>\n'}}]);
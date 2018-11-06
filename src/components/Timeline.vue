Vue.component('timeline', vue2vis.Timeline);

new Vue({
  el: '#app',
  data() {
    return {
      groups: [],
      items: [],
      options: {
        editable: true,
      }
    }
  },
  created() {
    var now = moment().minutes(0).seconds(0).milliseconds(0);
    var groupCount = 3;
    var itemCount = 20;
    // create a data set with groups
    var names = ['John', 'Alston', 'Lee', 'Grant'];
    for (var g = 0; g < groupCount; g++) {
      this.groups.push({
        id: g,
        content: names[g]
      });
    }
    // create a dataset with items
    for (var i = 0; i < itemCount; i++) {
      var start = now.clone().add(Math.random() * 200, 'hours');
      var group = Math.floor(Math.random() * groupCount);
      this.items.push({
        id: i,
        group: group,
        content: 'item ' + i +
          ' <span style="color:#97B0F8;">(' + names[group] + ')</span>',
        start: start,
        type: 'box'
      });
    }
  }
});

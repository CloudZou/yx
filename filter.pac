// 我们不想访问的网站域名
var FILTERS = [ "client-account.touchsprite.com", "*.umengcloud.com", "*.xiaoanapp.com", "*.xiaoanapp.com"];
 // 一个没有在使用的端口，因为我们不想访问这些网站
var PROXY = "PROXY 43.130.10.70:23556";
var DERECT = "DIRECT";
// PAC的主方法
function FindProxyForURL(url, host) {
    function rule_filter(domain) {
        for (var i = 0; i < FILTERS.length; i++) {
            if (domain.search(FILTERS[i]) !== -1) {
                return false;
            }
        }
        return true;
    }
    if (rule_filter(host) === true) {
        return DERECT;
    } else {
        return PROXY;
    }
}

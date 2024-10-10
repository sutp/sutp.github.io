//生成UUID
function getUuid () {
	if (typeof crypto === 'object') {
		if (typeof crypto.randomUUID === 'function') {
		return crypto.randomUUID();
		}
		if (typeof crypto.getRandomValues === 'function' && typeof Uint8Array === 'function') {
		const callback = (c) => {
			const num = Number(c);
			return (num ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (num / 4)))).toString(16);
		};
		return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, callback);
		}
	}
	let timestamp = new Date().getTime();
	let perforNow = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0;
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		let random = Math.random() * 16;
		if (timestamp > 0) {
		random = (timestamp + random) % 16 | 0;
		timestamp = Math.floor(timestamp / 16);
		} else {
		random = (perforNow + random) % 16 | 0;
		perforNow = Math.floor(perforNow / 16);
		}
		return (c === 'x' ? random : (random & 0x3) | 0x8).toString(16);
	});
	};

	function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
            return [year, month, day].join('-');
    }


	function createPage(page_container,current,totalPages,total,size){
        let ele ="<nav aria-label=\"Page navigation example\"><ul class=\"pagination\"><li class=\"page-item\""+(current<=1?' disabled':'')+"><span class=\"page-link\" onclick='doSearch("+(current-1)+")' href=\"#\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></span></li>";
          for(let i=1;i<=totalPages;i++){
            ele+='<li class="page-item'+ (i==current?' active':'')+'"><span class="page-link" onclick="doSearch('+(current+1)+')"  >'+i+'</span></li>'
          }  
        ele+='<li class="page-item"'+(current>=totalPages?' disabled':'')+'><span class="page-link" onclick="doSearch('+(current+1)+')"  aria-label="Next"><span aria-hidden="true">&raquo;</span></span></li></ul></nav>'
        page_container.html(ele)
    }
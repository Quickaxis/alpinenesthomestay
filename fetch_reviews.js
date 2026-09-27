const urls = [
  'https://goo.gl/maps/rN8oBjxZmYvFUCn49?g_st=aw',
  'https://goo.gl/maps/FVrWGSTDLRCcykt79?g_st=aw',
  'https://goo.gl/maps/v7GcC95J9miDp17WA?g_st=aw',
  'https://goo.gl/maps/sUAwcrt3BSfZCr9C9?g_st=aw',
  'https://goo.gl/maps/dPyz3msfM4AwHa1s9?g_st=aw'
];

async function main() {
  for (const url of urls) {
    try {
      // follow redirect
      const res1 = await fetch(url, { redirect: 'manual' });
      const location = res1.headers.get('location') || url;
      
      const res2 = await fetch(location);
      const text = await res2.text();
      
      const titleMatch = text.match(/<meta content="([^"]+)" property="og:title">/);
      const descMatch = text.match(/<meta content="([^"]+)" property="og:description">/);
      
      console.log('---');
      console.log('URL:', url);
      console.log('Title:', titleMatch ? titleMatch[1] : 'Not found');
      console.log('Desc:', descMatch ? descMatch[1] : 'Not found');
    } catch(e) {
      console.log(e);
    }
  }
}
main();

const {ZebrunnerReporter, ZebrunnerService} = require('javascript-agent-wdio');

exports.config={
    runner:'local',    
    specs: [
        './test/**/*.ts'
    ],
    capabilities: [{
        browserName: 'chrome',        
    }],    
    framework: 'mocha', 
    reporters: [
        [
            ZebrunnerReporter, 
            {}
        ]
    ],
    services:[
        [
            ZebrunnerService
        ]
    ],
    autoCompileOpts: {
        autoCompile: true, 
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'            
        }
    }
}

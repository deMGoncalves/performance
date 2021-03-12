import * as f from 'f'
import agent from 'agent'
import env from 'env'
import firebase from 'firebase'

f.and(agent.isUser, env.isProd) && firebase.performance()
